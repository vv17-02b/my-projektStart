import fs from 'fs';
import path from 'path';

// Шлях до папки з шрифтами
const fontsDir = path.join(process.cwd(), 'src', 'resources', 'fonts');

// Шлях до SCSS файлу, куди будуть генеруватись стилі
const outputFile = path.join(process.cwd(), 'src', 'scss', '_fonts.scss');

// Перевіряємо, чи існує папка з шрифтами
if (!fs.existsSync(fontsDir)) {
    console.error('Шлях до папки з шрифтами не знайдено!');
    process.exit(1);
}

// Отримуємо всі файли з папки шрифтів
const fontFiles = fs.readdirSync(fontsDir).filter(file => file.endsWith('.woff2') || file.endsWith('.woff'));

// Створюємо SCSS стилі для кожного шрифта
let scssContent = '';

fontFiles.forEach(file => {
    const fileName = path.basename(file, path.extname(file));  // без розширення
    scssContent += `@include font-face("Jost", "${fileName}", 400, normal);\n`;
});

// Записуємо в _fonts.scss
fs.writeFileSync(outputFile, scssContent);

console.log(`SCSS для шрифтів успішно згенеровано в файл: ${outputFile}`);
