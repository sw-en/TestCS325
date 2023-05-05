import p00028 from '../images/PIA00028_small.jpg';
import p01534 from '../images/PIA01534_small.jpg';
import p15350 from '../images/PIA15350_small.jpg';
import p18183 from '../images/PIA18183_small.jpg';
import p19064 from '../images/PIA19064_small.jpg';
import p19558 from '../images/PIA19558_small.jpg';



const pix = [
    [p00028,
      'Dione Mosaic',
      1996, 9, 26,
      640, 629,
      'Many impact craters---the record '
      + 'of the collision of cosmic debris---'
      + 'are shown in this mosaic from NASA '
      + 'Voyager 1 of Saturn moon Dione.'],

    [p01534,
      'Ariel Densely Pitted Surface',
      1999, 5, 8,
      564, 640,
      'NASA Voyager 2 took this image on '
      + "January 24, 1986, showing Ariel's "
      + 'surface densely pitted with craters. '
      + 'Numerous valleys and fault scarps '
      + 'crisscross the highly pitted terrain.'],


    [p15350,
      'Markings of Ejected Material on Vesta Surface',
      2012, 2, 10,
      640, 640,
      'This image from NASA Dawn spacecraft shows '
      + 'many linear or sinuous grooves crisscrossing '
      + 'the surface of asteroid Vesta. They were '
      + 'created when large pieces of debris grazed '
      + 'and scoured the surface.'],

    [p18183,
      'Dione as seen by Voyager 2',
      2005, 8, 3,
      640, 640,
      'Cracks, canyons, craters, and streaks are '
      + 'seen in this image of Saturn icy moon, '
      + 'Dione, taken from Voyager 2 on '
      + 'August 3, 2005.'],


    [p19064,
      'Settling in at Ceres',
      2015, 4, 20,
      542, 640,
      'This frame from an animated sequence of '
      + 'images shows northern terrain on the '
      + 'sunlit side of dwarf planet Ceres as '
      + 'seen by NASA Dawn spacecraft on '
      + 'April 14 and 15, 2015.'],


    [p19558,
      'Dawn RC3 Image 24',
      2015, 6, 5,
      640, 640,
      'This image of Ceres is part of a sequence ',
      + 'taken by NASA Dawn spacecraft on '
      + 'May 7, 2015, from a distance of '
      + '8,400 miles (13,600 kilometers).']

  ];

  function makeCatalogEntry(picture) {
    const entry = {
      image: picture[0],
      title: picture[1],
      year: picture[2],
      month: picture[3],
      day: picture[4],
      width: picture[5],
      height: picture[6],
      description: picture[7]
    }

    return entry;
  } // makeCatalogEntry()

  const catalog = pix.map(makeCatalogEntry);

  const index =
  Math.trunc(Math.random() * catalog.length);


const Images = () => {
    <div className="Images">
        <h1>{catalog[index].title}</h1>
        <img src={catalog[index].image}
            alt="small world"
            width="256"
        />
        <p>
            {catalog[index].description}
        </p>
    </div>
};
export default Images;