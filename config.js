var config = {
  style: "mapbox://styles/daltonwb/cm173gemf00hn01pd3qbscwuf",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Challenges for the UN in 2024–2025</h1><p class="hedp">Leaders will meet at the UN General Assembly at a bleak moment. The war between Israel and Hamas has cast a long shadow over the world organisation, and many of its members worry that it is failing to fulfil its core mandate of preserving peace and security.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Regional Program staff, the UN Advocacy Team, the Policy Team and colleagues working on cross-cutting issues.<br /><strong>Visualisation & Design</strong>: Paul Franz, Claire Boccon-Gibod,Jorge Gutierrez-Lucena and Emma Eva Schut <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "Supporting UN Operations in Gaza and the Region",
      image: "",
      description:
        "The UN Relief and Works Agency for Palestine Refugees in the Near East (UNRWA) provides the main logistics hub <a href='https://www.unrwa.org/what-we-do/gaza-supplies-and-dispatch-tracking' target='_blank'>for aid into Gaza</a>. Israel has shuttered many of the border crossings into Gaza, and humanitarians have only used the Kerem Shalom and Gate 96 border crossings since the end of July." +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [34.31234, 31.37974],
        zoom: 10.5,
        pitch: 32.5,
        bearing: 0,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "palestine",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "palestine_2",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "open-crossings",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "closed-crossings",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "palestine",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "palestine_2",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "gaza_strip",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "open-crossings",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "closed-crossings",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "INTRO2",
      alignment: "left",
      hidden: false,
      title: "Supporting UN Operations in Gaza and the Region",
      image: "",
      description:
        "Separately, diplomats are alarmed over the risk of escalation between Hizbollah and Israel in Lebanon. An escalation of fighting could put UNIFIL troops stationed along the Blue Line directly in the crossfire." +
        '<br /><br /><a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120464" target="_blank">&#8594; [Read more]</a>',
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
          layer: "road-draw-line",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "road-draw-line",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "SUDAN",
      alignment: "left",
      hidden: false,
      title: "Marshalling International Diplomacy for Sudan",
      image: "",
      description:
        "The Secretary-General's Personal Envoy Ramtane Lamamra convened the Sudanese Armed Forces (SAF) and Rapid Support Forces (RSF) representatives for proximity talks on humanitarian issues in Geneva in July. This helped pave the way for an agreement with the SAF and RSF one month later to reopen a humanitarian corridor through Adre, a Chadian border city, into the RSF-held Western Darfur region of Sudan." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120468" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [22.22724, 13.4534],
        zoom: 16.5,
        pitch: 50,
        bearing: -9,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "MYANMAR",
      alignment: "center",
      hidden: false,
      title: "Resetting UN engagement in Myanmar",
      image: "",
      description:
        "With violence rising across much of the country over the last year, and the army and its proxies often finding themselves forced onto the back foot by ethnic armed groups and post-coup resistance forces, the UN should seize the moment to strengthen its ability to deliver aid to vulnerable populations in the country and bolster its diplomatic efforts in the region." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120472" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [96.20304, 20.94901],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "HAITI",
      alignment: "left",
      hidden: false,
      title: "Surging UN assistance to Haiti",
      image: "",
      description:
        "The most pressing question for Haiti revolves around the Multinational Security Support Mission (MSS)’ operational profile, funding and future. Once sufficiently equipped and staffed, police and mission personnel should endeavour to protect the capital’s critical infrastructure and step up operations against gang strongholds, with a view both to tempering the country’s  humanitarian crisis and providing a safe environment to hold elections." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120476" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.277873, 18.57867],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 0.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "haiti-TLA",
          duration: 2000,
          opacity: 1,
        }
      ],
      onChapterExit: [
        {
          layer: "haiti-TLA",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "COLOMBIA",
      alignment: "center",
      hidden: false,
      title: "Advancing Women's Protection and Participation in Colombia",
      image: "images/colombia.jpg",
      description:
        "The UN has an opportunity to step in to bolster measures to protect women, drawing on its mandate to support the existing 2016 peace agreement and to accompany new talks with armed and criminal groups. At the same time, the organisation should seek to revitalise existing commitments to bolster women’s participation in politics and peacebuilding, which have flagged over recent years but remain critical to rectifying historic exclusion of marginalised groups and achieving equitable peace." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120480" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-74.09794, 4.69284],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "AFRICA",
      alignment: "left",
      hidden: false,
      title: "Confronting the future of UN peacekeeping in Africa",
      image: "",
      description:
        "The UN is in the process of shrinking its peacekeeping presence in Africa, which has been the centre of attention for its peace operations over the last quarter-century. As a result, the Security Council and wider UN membership are grappling with the question of how the UN can contribute to stability on the continent in the future, including the role Blue Helmet missions might play or how operational and financial support could be provided to African-led deployments." + "<div class='spacer'></div>" + "This map shows countries currently hosting UN peacekeeping missions, AU-authorised peace support operations, and regional security operations." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120484" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [13.43076, 13.66816],
        zoom: 5,
        pitch: 32.5,
        bearing: 30,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "PEACE2",
      alignment: "left",
      hidden: false,
      title: "Reinforcing the UN Peacebuilding Architecture",
      image: "",
      description:
        "The Peacebuilding Fund, one part of the UN's peacebuilding architecture, has a good reputation for providing limited but speedy financing for local peace talks and bolstering countries’ justice systems. Although the Fund sometimes backs projects in places where the UN already has peace operations, it also funds UN efforts in states – such as Burkina Faso and Papua New Guinea – where the organisation has no political presence. Map shows countries receiving UN peacebuilding fund allocations in 2023 (source: A/78/779)" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/sb12-ten-challenges-un-2024-2025#120488" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-28.58292, 10.67017],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "peace_fund_countries",
          duration: 2000,
          opacity: .7,
        }
      ],
      onChapterExit: [
        {
          layer: "peace_fund_countries",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "CT",
      alignment: "center",
      hidden: false,
      title:
        "Renewing Humanitarian Exemptions in UN Counterterrorism Sanctions",
      image: "images/terror_aid.jpg",
      description:
        "The Security Council will vote this December on extending a humanitarian exemption to for sanctions against al-Qaeda and the Islamic State (IS). Resolution 2664, approved by the Council in 2022, has already exempted transactions carried out to support humanitarian activities from UN-mandated asset freezes, removing long-standing obstacles to aid deliveries in several of the world’s biggest humanitarian emergencies. Twelve of the countries where sanctioned groups are active have major ongoing humanitarian operations and more than 100 million people in need.",
        location: {
          center: [-28.58292, 10.67017],
          zoom: 2,
          pitch: 0,
          bearing: 0,
          speed: 0.6,
        },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },
    {
      id: "WASHINGTON",
      alignment: "left",
      hidden: false,
      title: "Preparing for the next U.S. Administration",
      image: "",
      description:
        "Despite the host of headaches facing the UN, ambassadors and international officials acknowledge that November’s U.S. elections could present them with a new raft of problems, depending on the outcome.  the ups-and-downs of U.S. relations with the UN during both the Trump and Biden terms should be instructive for other UN members. As future U.S. admin-istrations reassess their global posture, their investment in international organisa-tions is liable to fluctuate. U.S. backing for a strong UN is not guaranteed under any president.",
      location: {
        center: [-77.03653, 38.89763],
        zoom: 16.75,
        pitch: 57,
        bearing: 17.6,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "WHITE_HOUSE",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
    {
      id: "UNSG",
      alignment: "left",
      hidden: false,
      title: "Choosing the next Secretary-General",
      image: "",
      description:
        "The race to replace António Guterres as UN secretary-general will heat up in the year ahead. Though the Security Council and General Assembly are unlikely to select his successor more than a few months before his term ends on 31 December 2026, a shadow race is already under way as potential candidates stake out their claims to lead the organisation. The eventual winner will play an important role in shaping the UN’s role in peace and security over the coming decade.",
      location: {
        center: [-73.96756, 40.75006],
        zoom: 16,
        pitch: 62,
        bearing: -44,
        speed: 0.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nyc",
          duration: 2000,
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "UN_BUILDING",
          duration: 2000,
          opacity: 0,
        }
      ],
    },
  ],
};
