export const TOUR_PACKAGES = [
  {
    id: 1,
    path: "new-york-tours",
    title: "New York Tours",
    menu: [
      {
        id: "#tag-essential-new-york",
        title: "Essential New York",
        link: "#tag-essential-new-york",
      },
      {
        id: "#tag-statue-of-liberty-tours",
        title: "Statue Of Liberty Tours",
        link: "#tag-statue-of-liberty-tours",
      },
      {
        id: "#tag-met-museum-tours",
        title: "Met Museum Tours",
        link: "#tag-met-museum-tours",
      },
      {
        id: "#tag-911-memorial-tours",
        title: "Met Museum Tours",
        link: "#tag-911-memorial-tours",
      },
      {
        id: "#tag-exclusive-tours",
        title: "Exclusive Tours",
        link: "#tag-exclusive-tours",
      },
      {
        id: "#tag-tours-under-2-hours",
        title: "Tours Under 2 Hours",
        link: "#tag-tours-under-2-hours",
      },
    ],
    data: [
      {
        category: "essential",
        title: "Essential New York",
        subtitle:
          "From the Statue of Liberty to the best of Broadway, stopping off for the perfect slice of pizza in between, our most in-demand tours of New York allow you to experience the very best of the city, no matter what your taste!",
        tours: [
          {
            id: "tour-1",
            title: "Early Access Statue of Liberty Tour with Ellis Island",
            description:
              "Merge an impeccably led guided visit to the Statue of Liberty and Ellis Island, arriving early to avoid the swelling afternoon crowds.",
            duration: "4 hours",
            max: "25",
            price: "$59",
            picture: "/public/tours/new-york/new-york-tour-1",
          },
          {
            id: "tour-2",
            title: "9/11 Memorial Tour & Priority Entrance 9/11 Museum Tickets",
            description:
              "Discover the human stories on this touching 9/11 tour which takes in the key sights and memorials including St Paul's Chapel, the Fireman's Memorial and the Reflecting Pools.",
            duration: "2 hours",
            max: "20",
            price: "$69",
            picture: "/public/tours/new-york/new-york-tour-2",
          },
          {
            id: "tour-3",
            title: "Must-See Manhattan with Empire State Building Ticket",
            description:
              "A must-do tour of must-see sites! Visit iconic sites like Radio City Music Hall, Rockefeller Center, and Grand Central Station. End your tour with tickets atop the Empire State Building's 86th Floor Observatory.",
            duration: "2 hours",
            max: "20",
            price: "$69",
            picture: "/public/tours/new-york/new-york-tour-3",
          },
        ],
      },
      {
        category: "statue-of-liberty",
        title: "Statue of Liberty Tours",
        subtitle:
          "Discover the story behind how Lady Liberty came to be on one of our fascinating Statue tours - remember all include the option to explore Ellis Island a little further!",
        tours: [
          {
            id: "tour-4",
            title: "Early Access Statue of Liberty Tour with Ellis Island",
            description:
              "Merge an impeccably led guided visit to the Statue of Liberty and Ellis Island, arriving early to avoid the swelling afternoon crowds.",
            duration: "4 hours",
            max: "25",
            price: "$59",
            picture: "/public/tours/new-york/new-york-tour-1",
          },
          {
            id: "tour-5",
            title:
              "Essential Statue of Liberty Afternoon Tour: Museum, Statue Grounds & Battery Park",
            description:
              "Concentrate on the fundamentals at the Statue of Liberty with a relaxed afternoon tour of Lady Liberty.",
            duration: "3 hours",
            max: "25",
            price: "$56",
            picture: "/public/tours/new-york/new-york-tour-4",
          },
          {
            id: "tour-6",
            title:
              "Statue of Liberty, Ellis Island & 9/11 Tour with priority One World Observatory Tickets",
            description:
              "A complete day of sightseeing organized into one incredible day! Get up close at the Statue of Liberty & Ellis Island. Take a walk around the sites associated with Sept 11th, ending the day atop One World Observatory at the World Trade Center.",
            duration: "9 hours",
            max: "20",
            price: "$124",
            picture: "/public/tours/new-york/new-york-tour-5",
          },
        ],
      },
      {
        category: "met-museum-tours",
        title: "Met Museum Tours",
        subtitle:
          "Our carefully curated tours of New York’s Metropolitan Museum of Art have taken years to perfect. Each offers an incredible journey through some of the best art from around the world, led by our passionate guides.",
        tours: [
          {
            id: "tour-7",
            title: "Meet The Met: Metropolitan Museum of Art Tour",
            description:
              "An expert-led journey through one of the world's most impressive art collections, this illuminating tour takes you from Ancient Egypt to Modern America with fascinating stories along the way.",
            duration: "3 hours",
            max: "10",
            price: "$64",
            picture: "/public/tours/new-york/new-york-tour-6",
          },
          {
            id: "tour-8",
            title: "Met Express: Highlights of the Metropolitan Museum of Art",
            description:
              "Only a short time to take in the best of the Met? This 'express' tour takes the smart route through the Met's most important pieces  - stopping off at some unmissable gems along the way!",
            duration: "2 hours",
            max: "10",
            price: "$52",
            picture: "/public/tours/new-york/new-york-tour-7",
          },
          {
            id: "tour-9",
            title:
              "Twisted Metropolitan Museum of Art Tour: Scandals & Secrets of the Masterpieces",
            description:
              "A very twisted take on our 'normal' Metropolitan Museum of Art Tour - this fun, expert-led tour examines the lighter side of America's greatest art collection in just 2.5 hours! Sundays at 4pm ET.",
            duration: "2.5 hours",
            max: "10",
            price: "$75",
            picture: "/public/tours/new-york/new-york-tour-8",
          },
        ],
      },
      {
        category: "911-memorial-tours",
        title: "9/11 Memorial Tours",
        subtitle:
          "Our tours of the 9/11 Memorial Complex, St. Paul’s Chapel and Ladder 10 respectfully mark a day that changed the world, visiting key sites of the devastating tragedy that took place on September 11th 2001 in New York.",
        tours: [
          {
            id: "tour-10",
            title: "9/11 Memorial Tour & Priority Entrance 9/11 Museum Tickets",
            description:
              "Discover the human stories on this touching 9/11 tour which takes in the key sights and memorials including St Paul's Chapel, the Fireman's Memorial and the Reflecting Pools.",
            duration: "2 hours",
            max: "20",
            price: "$69",
            picture: "/public/tours/new-york/new-york-tour-2",
          },
          {
            id: "tour-11",
            title:
              "Statue of Liberty, Ellis Island & 9/11 Tour with priority One World Observatory Tickets",
            description:
              "A complete day of sightseeing organized into one incredible day! Get up close at the Statue of Liberty & Ellis Island. Take a walk around the sites associated with Sept 11th, ending the day atop One World Observatory at the World Trade Center.",
            duration: "9 hours",
            max: "20",
            price: "$124",
            picture: "/public/tours/new-york/new-york-tour-5",
          },
          {
            id: "tour-9",
            title:
              "Statue of Liberty, Ellis Island & 9/11 Tour with 9/11 Memorial Museum Tickets.",
            description:
              "A complete day of sightseeing organized into one incredible day! A combo of our Statue of Liberty & Ellis Island tour paired with our 9/11 Tour with 9/11 Memorial Museum Tickets.",
            duration: "9 hours",
            max: "20",
            price: "$115",
            picture: "/public/tours/new-york/new-york-tour-9",
          },
        ],
      },
    ],
  },
];
