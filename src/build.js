import fs from 'fs';

const version = process.env.COMMIT_MESSAGE;

(async () => {
  const iconsData = JSON.parse(fs.readFileSync(`lib/ionicons-${version}/src/data.json`, 'utf-8')).icons;
  if (!Array.isArray(iconsData)) return;
  const icons = iconsData.map((icon) => icon.name);
  const res = {};
  for (const icon of icons) {
    res[icon] = fs
      .readFileSync(`lib/ionicons-${version}/src/svg/${icon}.svg`, 'utf-8')
      .replace(/(<svg[^>]+)width="[^"]+" /g, '$1')
      .replace(/(<svg[^>]+)height="[^"]+" /g, '$1')
      .replace(/(#000|#000000)/g, 'currentColor')
      .replace(/<title>.*?<\/title>/g, '');
  }
  fs.writeFileSync('./lib/iconList.json', JSON.stringify(res));

  let data = fs.readFileSync('./src/Component.d.ts', 'utf-8');
  data = data.replace("'all icon names'", icons.map((icon) => `'${icon}'`).join(' | '));
  fs.writeFileSync('./lib/IonIcon.d.ts', data);
})();
