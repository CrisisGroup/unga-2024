var config = {
  style: "mapbox://styles/daltonwb/clwj9hw5f00jw01qxhijy3f9f",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>EU Watch List 2024 – Spring Update</h1><p class="hedp">Each year, Crisis Group publishes two updates to the EU Watch List identifying where the EU and its member states can enhance prospects for peace. This update includes entries on Bosnia and Herzegovina, Haiti, Sudan, Philippine-Chinese frictions in the South China Sea and Hizbollah-Israel tensions.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the EU Research and Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod and Michelle Malaney <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "center",
      hidden: false,
      title: "INTRODUCTION",
      image: "",
      description:
        "With just two weeks until voters go to the polls, all eyes in Brussels are on the European Parliament elections. The results will shape the EU’s overall political direction in the years ahead. The stakes seem especially high in 2024 with wars and crises in the bloc’s eastern and southern neighbourhoods. Moreover, far-right parties are on the rise, seeking to make Europe more inward-looking. Moving in this direction would be to Europe’s detriment, however. To expand its geopolitical reach and build a safer Europe, the EU will need to invest in the tools that keep war and humanitarian catastrophe at bay both on Europe’s borders and farther afield." + '<br /><br /><a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#intro" target="_blank">&#8594; [Read more]</a>' + "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [-35.07977, 21.55533],
        zoom: 2.25,
        pitch: 16,
        bearing: 7.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "ISR",
      alignment: "left",
      hidden: false,
      title: "HIZBOLLAH/ISRAEL",
      image: "",
      description:
        "The EU and member states should:<ul><li>Better use its leverage to press for permanent ceasefire in Gaza and the release of all hostages there; </li><li>Support French and U.S. mediation efforts in South Lebanon;</li><liPress Israel to pursue security through diplomatic means;</li><li>Prepare material aid for Lebanon-Israel border security and step up support to UNIFIL;</li><li>Prepare for potential humanitarian fallout and displacement an escalation might cause.</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#israel" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
        bbox: [
          [28.06034, 29.49946],
          [42.2118, 34.85895],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "roadDraw",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "ISRAEL",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "LEBANON",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "LEBANON copy",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "beirut",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "beirut_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tel-aviv",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tel-aviv_label",
          duration: 2000,
          opacity: 0.8,
        },
        {
          layer: "damascus",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "west_bank",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "israel-fill",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "golan_heights",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "golan-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "SUDAN",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "el-fasher",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "el-fasher_label",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ISRAEL",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "LEBANON",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "LEBANON copy",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "beirut",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "beirut_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tel-aviv",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tel-aviv_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "damascus",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "damascus_label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "west_bank",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "israel-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "golan_heights",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "golan-label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SUDAN-1",
      alignment: "left",
      hidden: false,
      title: "SUDAN",
      image: "",
      description:
        "The EU and member states should:<ul><li>Support the Jeddah ceasefire talks;</li><li>Help align peace efforts of regional and international key players;</li><li>Continue to convene Sudanese political and civil figures, in an effort to support a future political process;</li><li>Fulfil humanitarian aid pledges and help ensure unhindered access to all Sudanese; </li><li>Keep Sudan high on the agenda.</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#sudan" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [27.75505, 15.19553],
        zoom: 5,
        pitch: 16,
        bearing: 7.2,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "SUDAN",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "el-fasher",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "el-fasher_label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-fill",
          duration: 2000,
          opacity: 0.7,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "SUDAN-2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "images/sudan.jpg",
      description: "<br /><br /><br />",
      location: {
        center: [27.75505, 15.19553],
        zoom: 5,
        pitch: 16,
        bearing: 7.2,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "SUDAN",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sudan-fill",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "el-fasher",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "el-fasher_label",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "SUDAN",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sudan-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "el-fasher",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "el-fasher_label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PHP",
      alignment: "left",
      hidden: false,
      title: "PHILIPPINES/SOUTH CHINA SEA",
      image: "",
      description:
        "The EU and member states should:<ul><li>Seek diplomatic engagement with Beijing and Manila to keep tensions in check and expand diplomatic presence in South East Asia;</li><li>Promote respect for international maritime law as a source of neutral rules for dispute resolution and conflict prevention;</li><li>Strengthen cooperation with Philippines coast-guard in areas such as environmental protection, safety and search and rescue.</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#philippines" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [115.78357, 10.18953],
        zoom: 4.45,
        pitch: 39,
        bearing: -29.24,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "9dashline",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "2024-eu-wl",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "php-fill",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0.8,
        },
        {
          layer: "bathymetry",
          duration: 2000,
          opacity: 0.15,
        },
        {
          layer: "water",
          duration: 5000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "9dashline",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "2024-eu-wl",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "php-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "bathymetry",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "water",
          duration: 2000,
          opacity: 1,
        },
      ],
    },
    {
      id: "BOS",
      alignment: "left",
      hidden: false,
      title: "BOSNIA AND HERZEGOVINA",
      image: "",
      description:
        "The EU and member states should:<ul><li>Work toward a deal in which Republika Srpska stops trying to run its own elections, the High Representative does not impose punitive measures without consensus support from key governments, and Bosnia enacts a new election law;</li><li>Coordinate with the U.S. and Quint countries to guide the High Representative so that he uses his powers when there is clear consensus that they are needed to prevent damage;</li><li>Help Bosnian leaders settle ownership of state- and military-owned property, the last condition before closing the High Representative’s office;</li><li>Use forthcoming EU membership talks for dialogue about re-evaluating the Dayton accords framework;</li><li>Make clear that secession would compromise EU accession.</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#bosnia" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [17.30775, 44.12183],
        zoom: 7,
        pitch: 32.5,
        bearing: 30,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "banja_luka_dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "bos-herz",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "banja_luka",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "city_dot_sarajevo",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "sarajevo",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "bosnia-fill",
          duration: 2000,
          opacity: 0.7,
        },
        {
          layer: "republika_Srpska",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "banja_luka_dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "bos-herz",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "banja_luka",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "city_dot_sarajevo",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "sarajevo",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "bosnia-fill",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "republika_Srpska",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "HAITI",
      image: "",
      description:
        "The EU and member states should:<ul><li>Provide support to Kenya-led multinational security mission; </li><li>Impose sanctions on gang sponsors; </li><li>Assist the Haitian state with DDR programs; </li><li>Support the transitional government to rebuild democratic state and convene elections; </li><li>Increase humanitarian aid.</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/watch-list-2024-spring-update#haiti" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.74457, 18.92369],
        zoom: 8.5,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "haiti-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "pap",
          duration: 1000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "haiti-label",
          duration: 1000,
          opacity: 0,
        },
        {
          layer: "pap",
          duration: 4000,
          opacity: 0,
        },
      ],
    },
    {
      id: "HAITI-1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      location: {
        center: [-72.283324, 18.581603],
        zoom: 16,
        pitch: 0,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "HAITI-2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      location: {
        center: [-72.283324, 18.581603],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.3,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "airport-highlight",
          duration: 5000,
          opacity: 0.6,
        },
        {
          layer: "haiti-airport",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "airport-highlight",
          duration: 4000,
          opacity: 0,
        },
        {
          layer: "haiti-airport",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "END",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      location: {
        center: [-35.07977, 21.55533],
        zoom: 2.25,
        pitch: 16,
        bearing: 7.2,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
  ],
};
