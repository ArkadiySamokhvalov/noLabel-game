export function fixImageMaps() {
  const imgs = document.querySelectorAll('img[usemap]');

  [].forEach.call(imgs, function (img: HTMLImageElement) {
    if (!img.naturalHeight) {
      return;
    }

    const h = img.height / img.naturalHeight;
    const w = img.width / img.naturalWidth;
    const map = document.getElementsByName(img.useMap.slice(1))[0];

    if (!map) {
      return;
    }

    for (let i = 0; i < map.children.length; i += 1) {
      const area = <HTMLAreaElement>map.children[i];

      if (!area.coords) {
        continue;
      }

      let coords = area.coords;

      if (!area.originalCoords) {
        area.originalCoords = coords;
      } else {
        coords = area.originalCoords;
      }

      const split = coords.split(',');
      let fixed = '';
      split.forEach(function (coord, n) {
        if (n != 0) {
          fixed += ',';
        }
        fixed += n % 2 == 0 ? Number(coord) * w : Number(coord) * h;
      });
      area.coords = fixed;
    }
  });
}
