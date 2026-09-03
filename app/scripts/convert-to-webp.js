import sharp from "sharp";
import { readdirSync } from "fs";
import { join, basename } from "path";

const imageDir = "./app/assets";
const images = readdirSync(imageDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const img of images) {
  const inputPath = join(imageDir, img);
  const outputPath = join(imageDir, img.replace(/\.(jpe?g|png)$/i, ".webp"));
  sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
  console.log(`Converted ${img} → ${basename(outputPath)}`);
}
