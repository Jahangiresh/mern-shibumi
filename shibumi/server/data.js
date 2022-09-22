import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jahangir",
      email: "jahangiresh@code.edu.az",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "john",
      email: "john@code.edu.az",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      // id: 1,
      name: "priming salam",
      slug: "priming-salam",
      category: "eye",
      rating: 4.5,
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      numReviews: 10,
      countInStock: 10,
      brand: "kiko Milan",
      price: 40,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d510cbe90f18704652e7_5d88989b08e53e28f8fd70df_tube-cream6-p-500.png",
      count: 1,
      isTrending: false,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },

    {
      // id: 2,
      name: "testing aqua bomb",
      slug: "testing-aqua-bomb",
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      category: "eye",
      rating: 4,
      numReviews: 10,
      countInStock: 20,
      brand: "kiko Milan",

      price: 50,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d510cbe90fa6b24652e9_5d88989b08e53e8370fd707f_cream-p-500.png",
      count: 1,
      isTrending: true,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },
    {
      // id: 3,
      name: "fresh calming mousse",
      slug: "fresh-calming-mousse",
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      category: "mask",
      rating: 2,
      numReviews: 10,
      countInStock: 0,
      brand: "kiko Milan",

      price: 25,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d50fcbe90f3a7c4652de_5d88989b08e53e974efd7083_soap-p-500.png",
      count: 1,
      isTrending: true,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },
    {
      // id: 4,
      name: "multivitamin power mask",
      slug: "multivitamin-power-mask",
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      category: "mask",
      rating: 1,
      numReviews: 10,
      countInStock: 10,
      brand: "kiko Milan",

      price: 35,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d50fcbe90f76644652e0_5d88989b08e53e2ceefd708b_tube-cream-p-500.png",
      count: 1,
      isTrending: true,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },
    {
      // id: 5,
      name: "skin recovery",
      slug: "skin-recovery",
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      category: "lips",
      rating: 3,
      numReviews: 10,
      countInStock: 10,
      brand: "kiko Milan",

      price: 40,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d50fcbe90f24ff4652e4_5d88989b08e53e80d3fd7084_spry2-p-500.png",
      count: 1,
      isTrending: true,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },
    {
      // id: 6,
      name: "resurfacing treatment",
      slug: "resurfacing-treatment",
      desc: "Clamorous day and night cream invented by sir Elan Musc is a product of moon locals use it never regrets",
      category: "lips",
      rating: 0.5,
      numReviews: 10,
      countInStock: 10,
      brand: "kiko Milan",

      price: 30,
      image:
        "https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d50fcbe90f25a34652e3_5d88989b08e53ee34bfd7122_spry5-p-500.png",
      count: 1,
      isTrending: true,
      reRender: true,
      instruction:
        "bu meshul 12 il qizdirildiqdan sonra uze cekilir, gece istifade ucundur uz derisinin rengini acir ve hetta sizi 321il qocaldaraq mumya edir, daha sonra mhsulun qabini goturub arxasini keserek dibinde qalan liquidi de coreyin ustune yaxib shin cayla yeyirsiniz bu zaman qandaki eritrositler cavanlashir ve bunu goren leykositler derhal onlarla birlikde olub dunyaya usaq getirmek isteyir ki bu da trombositlerin qisqancligina sebeb olur ve belece damarlarda qisqancliq zemninde qetl toredilir ki bununla da trombositler oz hucrelerine gonmderilir",
    },
  ],
};

export default data;
