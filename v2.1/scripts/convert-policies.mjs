#!/usr/bin/env node
/**
 * Converts all PNG/JPG/JPEG files in public/assets/policies/{id}/ to WebP.
 * Run: node scripts/convert-policies.mjs
 * MKT drops desktop.{png,jpg,jpeg} + mobile.{png,jpg,jpeg} into each folder.
 * This script generates desktop.webp + mobile.webp alongside them.
 */
import { readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
const __dirname = dirname(fileURLToPath(import.meta.url));
const POLICIES_DIR = join(__dirname, "..", "public", "assets", "policies");

async function convert() {
  const folders = await readdir(POLICIES_DIR);
  let converted = 0;
  let skipped = 0;

  for (const folder of folders) {
    const folderPath = join(POLICIES_DIR, folder);
    const folderStat = await stat(folderPath);
    if (!folderStat.isDirectory()) continue;

    const files = await readdir(folderPath);
    const imgFiles = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

    for (const img of imgFiles) {
      const webp = img.replace(/\.(png|jpe?g)$/i, ".webp");
      const imgPath = join(folderPath, img);
      const webpPath = join(folderPath, webp);

      // Skip if webp already exists and is newer than source
      try {
        const imgStat = await stat(imgPath);
        const webpStat = await stat(webpPath);
        if (webpStat.mtimeMs >= imgStat.mtimeMs) {
          skipped++;
          continue;
        }
      } catch {
        // webp doesn't exist yet, convert
      }

      await sharp(imgPath).webp({ quality: 80 }).toFile(webpPath);
      converted++;
      console.log(`  ✓ ${folder}/${img} → ${webp}`);
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped (already up-to-date)`);
}

convert().catch((err) => {
  console.error("Convert failed:", err);
  process.exit(1);
});
