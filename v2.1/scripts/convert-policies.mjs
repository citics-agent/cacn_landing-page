#!/usr/bin/env node
/**
 * Converts all PNG files in public/assets/policies/{id}/ to WebP.
 * Run: node scripts/convert-policies.mjs
 * MKT drops desktop.png + mobile.png into each folder.
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
    const pngFiles = files.filter((f) => f.endsWith(".png"));

    for (const png of pngFiles) {
      const webp = png.replace(/\.png$/, ".webp");
      const pngPath = join(folderPath, png);
      const webpPath = join(folderPath, webp);

      // Skip if webp already exists and is newer than png
      try {
        const pngStat = await stat(pngPath);
        const webpStat = await stat(webpPath);
        if (webpStat.mtimeMs >= pngStat.mtimeMs) {
          skipped++;
          continue;
        }
      } catch {
        // webp doesn't exist yet, convert
      }

      await sharp(pngPath).webp({ quality: 80 }).toFile(webpPath);
      converted++;
      console.log(`  ✓ ${folder}/${png} → ${webp}`);
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped (already up-to-date)`);
}

convert().catch((err) => {
  console.error("Convert failed:", err);
  process.exit(1);
});
