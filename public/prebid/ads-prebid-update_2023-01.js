"use strict";

var PREBID_TIMEOUT = 3000;
var FAILSAFE_TIMEOUT = 6000;
var adUnits = [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var pageAds = window.PAGE;

function initPrebid() {
    var ads = {
        home: {
            pe_Top: {
                code: '/422621568/larepublica.pe_Top',
                div: 'Top',
                id: 24256983,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Top_970x250"
                        }
                    },
                    appnexus: {
                        id: 24256983
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567662,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105468,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786171'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377769'
                        }
                    }
                },
                size: {
                    desktop: [
                        [980, 250],
                        [970, 250],
                        [940, 250],
                        [940, 180],
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ]
                },
            },
            pe_Lateral_Left: {
                code: '/422621568/larepublica.pe_Lateral_Left',
                div: 'Lateral_Left',
                id: 24256984,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Left_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256984
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567640,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105471,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786172'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377770'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Lateral_Right: {
                code: '/422621568/larepublica.pe_Lateral_Right',
                div: 'Lateral_Right',
                id: 24256985,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Right_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256985
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567642,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105472,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786173'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377771'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Strip: {
                code: '/422621568/larepublica.pe_Strip',
                div: 'Strip',
                id: 24256976,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_strip_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256976
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567726,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105474,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786161'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377759'

                        }
                    }
                },
                size: {
                    phone: [
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Billboard: {
                code: '/422621568/larepublica.pe_Billboard',
                div: 'Billboard',
                id: 24256986,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Billboard_320x100"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Billboard_728x90"
                        }
                    },
                    appnexus: {
                        id: 24256986
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567692,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567620,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 109195,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 109195,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786174'
                        },
                        desktop: {
                            id: '786175'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377772'
                        },
                        desktop: {
                            adSlot: '4377773'
                        }
                    }
                },
                size: {
                    desktop: [
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ],
                    phone: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
            },
            pe_Middle: {
                code: '/422621568/larepublica.pe_Middle',
                div: 'Middle',
                id: 24256981,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_middle_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_middle_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256981
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567718,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567648,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105476,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105476,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786167'
                        },
                        desktop: {
                            id: '786168'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377765'
                        },
                        desktop: {
                            adSlot: '4377766'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_Middle2_Right: {
                code: '/422621568/larepublica.pe_Middle2_Right',
                div: 'Middle2_Right',
                id: 24256982,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256982
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567724,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567654,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105479,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105479,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786169'
                        },
                        desktop: {
                            id: '786170'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377767'
                        },
                        desktop: {
                            adSlot: '4377768'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [300, 50],
                        [320, 100],
                        [300, 250],
                        [300, 100],
                        [250, 250]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_Sticky: {
                code: '/422621568/larepublica.pe_Sticky',
                div: 'Sticky',
                id: 24256975,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_sticky_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256975
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 2033620,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105698,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786158'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377758'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [320, 100],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
        },
        secciones: {
            pe_Lateral_Left: {
                code: '/422621568/larepublica.pe_Lateral_Left',
                div: 'Lateral_Left',
                id: 24256984,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Left_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256984
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567640,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105471,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786172'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377770'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Lateral_Right: {
                code: '/422621568/larepublica.pe_Lateral_Right',
                div: 'Lateral_Right',
                id: 24256985,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Right_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256985
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567642,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105472,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786173'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377771'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Top: {
                code: '/422621568/larepublica.pe_Top',
                div: 'Top',
                id: 24256983,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Top_970x250"
                        }
                    },
                    appnexus: {
                        id: 24256983
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567662,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105468,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786171'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377769'
                        }
                    }
                },
                size: {
                    desktop: [
                        [980, 250],
                        [970, 250],
                        [940, 250],
                        [940, 180],
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ]
                },
            },
            pe_Strip: {
                code: '/422621568/larepublica.pe_Strip',
                div: 'Strip',
                id: 24256976,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_strip_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256976
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567726,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105474,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786161'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377759'

                        }
                    }
                },
                size: {
                    phone: [
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Middle: {
                code: '/422621568/larepublica.pe_Middle',
                div: 'Middle',
                id: 24256981,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_middle_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_middle_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256981
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567718,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567648,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105476,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105476,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786167'
                        },
                        desktop: {
                            id: '786168'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377765'
                        },
                        desktop: {
                            adSlot: '4377766'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_Middle2: {
                code: '/422621568/larepublica.pe_Middle2',
                div: 'Middle2',
                id: 24256977,
                bidder: {
                    triplelift: {
                        mobile: { inventoryCode: "larepublica_pe_Middle2_300x250" },
                        desktop: { inventoryCode: "larepublica_pe_Middle2_300x250" }
                    },
                    appnexus: {
                        id: 24256977
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567650,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567650,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105470,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105470,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786162'
                        },
                        desktop: {
                            id: '786162'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377760'
                        },
                        desktop: {
                            adSlot: '4377760'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_Middle2_Right: {
                code: '/422621568/larepublica.pe_Middle2_Right',
                div: 'Middle2_Right',
                id: 24256982,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256982
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567724,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567654,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105479,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105479,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786169'
                        },
                        desktop: {
                            id: '786170'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377767'
                        },
                        desktop: {
                            adSlot: '4377768'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [300, 50],
                        [320, 100],
                        [300, 250],
                        [300, 100],
                        [250, 250]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_inline: {
                code: '/422621568/larepublica.pe_inline',
                div: 'inline',
                id: 24256978,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256978
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567632,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567632,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105477,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105477,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786163'
                        },
                        desktop: {
                            id: '786163'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377761'
                        },
                        desktop: {
                            adSlot: '4377761'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_inline2: {
                code: '/422621568/larepublica.pe_inline2',
                div: 'inline_two',
                id: 24256979,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline2_300x600"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline2_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256979
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567706,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567634,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105478,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105478,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786164'
                        },
                        desktop: {
                            id: '786165'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377762'
                        },
                        desktop: {
                            adSlot: '4377763'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_inline3: {
                code: '/422621568/larepublica.pe_inline3',
                div: 'inline_three',
                id: 24256980,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256980
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567638,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567638,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105699,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105699,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786166'
                        },
                        desktop: {
                            id: '786166'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377764'
                        },
                        desktop: {
                            adSlot: '4377764'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Sticky: {
                code: '/422621568/larepublica.pe_Sticky',
                div: 'Sticky',
                id: 24256975,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_sticky_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256975
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 2033620,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105698,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786158'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377758'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [320, 100],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
        },
        tag: {
            pe_Lateral_Left: {
                code: '/422621568/larepublica.pe_Lateral_Left',
                div: 'Lateral_Left',
                id: 24256984,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Left_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256984
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567640,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105471,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786172'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377770'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Lateral_Right: {
                code: '/422621568/larepublica.pe_Lateral_Right',
                div: 'Lateral_Right',
                id: 24256985,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Right_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256985
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567642,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105472,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786173'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377771'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Top: {
                code: '/422621568/larepublica.pe_Top',
                div: 'Top',
                id: 24256983,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Top_970x250"
                        }
                    },
                    appnexus: {
                        id: 24256983
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567662,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105468,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786171'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377769'
                        }
                    }
                },
                size: {
                    desktop: [
                        [980, 250],
                        [970, 250],
                        [940, 250],
                        [940, 180],
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ]
                },
            },
            pe_Strip: {
                code: '/422621568/larepublica.pe_Strip',
                div: 'Strip',
                id: 24256976,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_strip_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256976
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567726,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105474,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786161'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377759'

                        }
                    }
                },
                size: {
                    phone: [
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Middle: {
                code: '/422621568/larepublica.pe_Middle',
                div: 'Middle',
                id: 24256981,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_middle_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_middle_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256981
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567718,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567648,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105476,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105476,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786167'
                        },
                        desktop: {
                            id: '786168'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377765'
                        },
                        desktop: {
                            adSlot: '4377766'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_Middle2: {
                code: '/422621568/larepublica.pe_Middle2',
                div: 'Middle2',
                id: 24256977,
                bidder: {
                    triplelift: {
                        mobile: { inventoryCode: "larepublica_pe_Middle2_300x250" },
                        desktop: { inventoryCode: "larepublica_pe_Middle2_300x250" }
                    },
                    appnexus: {
                        id: 24256977
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567650,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567650,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105470,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105470,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786162'
                        },
                        desktop: {
                            id: '786162'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377760'
                        },
                        desktop: {
                            adSlot: '4377760'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_Middle2_Right: {
                code: '/422621568/larepublica.pe_Middle2_Right',
                div: 'Middle2_Right',
                id: 24256982,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256982
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567724,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567654,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105479,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105479,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786169'
                        },
                        desktop: {
                            id: '786170'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377767'
                        },
                        desktop: {
                            adSlot: '4377768'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [300, 50],
                        [320, 100],
                        [300, 250],
                        [300, 100],
                        [250, 250]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_inline: {
                code: '/422621568/larepublica.pe_inline',
                div: 'inline',
                id: 24256978,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256978
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567632,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567632,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105477,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105477,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786163'
                        },
                        desktop: {
                            id: '786163'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377761'
                        },
                        desktop: {
                            adSlot: '4377761'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_inline2: {
                code: '/422621568/larepublica.pe_inline2',
                div: 'inline_two',
                id: 24256979,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline2_300x600"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline2_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256979
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567706,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567634,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105478,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105478,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786164'
                        },
                        desktop: {
                            id: '786165'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377762'
                        },
                        desktop: {
                            adSlot: '4377763'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_inline3: {
                code: '/422621568/larepublica.pe_inline3',
                div: 'inline_three',
                id: 24256980,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256980
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567638,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567638,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105699,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105699,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786166'
                        },
                        desktop: {
                            id: '786166'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377764'
                        },
                        desktop: {
                            adSlot: '4377764'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Sticky: {
                code: '/422621568/larepublica.pe_Sticky',
                div: 'Sticky',
                id: 24256975,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_sticky_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256975
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 2033620,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105698,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786158'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377758'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [320, 100],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
        },
        interna: {
            pe_Lateral_Left: {
                code: '/422621568/larepublica.pe_Lateral_Left',
                div: 'Lateral_Left',
                id: 24256984,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Left_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256984
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567640,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105471,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786172'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377770'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Lateral_Right: {
                code: '/422621568/larepublica.pe_Lateral_Right',
                div: 'Lateral_Right',
                id: 24256985,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Lateral_Right_160x600_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256985
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567642,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105472,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786173'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377771'
                        }
                    }
                },
                size: {
                    desktop: [
                        [160, 600],
                        [120, 600]
                    ]
                },
            },
            pe_Top: {
                code: '/422621568/larepublica.pe_Top',
                div: 'Top',
                id: 24256983,
                bidder: {
                    triplelift: {
                        desktop: {
                            inventoryCode: "larepublica_pe_Top_970x250"
                        }
                    },
                    appnexus: {
                        id: 24256983
                    },
                    rubicon: {
                        id: 21814,
                        desktop: {
                            zoneId: 1567662,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        desktop: {
                            formatId: 105468,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        desktop: {
                            id: '786171'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        desktop: {
                            adSlot: '4377769'
                        }
                    }
                },
                size: {
                    desktop: [
                        [980, 250],
                        [970, 250],
                        [940, 250],
                        [940, 180],
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ]
                },
            },
            pe_Strip: {
                code: '/422621568/larepublica.pe_Strip',
                div: 'Strip',
                id: 24256976,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_strip_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256976
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567726,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105474,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786161'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377759'

                        }
                    }
                },
                size: {
                    phone: [
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Middle: {
                code: '/422621568/larepublica.pe_Middle',
                div: 'Middle',
                id: 24256981,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_middle_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_middle_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256981
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567718,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567648,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105476,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105476,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786167'
                        },
                        desktop: {
                            id: '786168'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377765'
                        },
                        desktop: {
                            adSlot: '4377766'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_Middle2: {
                code: '/422621568/larepublica.pe_Middle2',
                div: 'Middle2',
                id: 24256977,
                bidder: {
                    triplelift: {
                        mobile: { inventoryCode: "larepublica_pe_Middle2_300x250" },
                        desktop: { inventoryCode: "larepublica_pe_Middle2_300x250" }
                    },
                    appnexus: {
                        id: 24256977
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567650,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567650,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105470,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105470,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786162'
                        },
                        desktop: {
                            id: '786162'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377760'
                        },
                        desktop: {
                            adSlot: '4377760'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_Middle2_Right: {
                code: '/422621568/larepublica.pe_Middle2_Right',
                div: 'Middle2_Right',
                id: 24256982,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Middle2_Right_300x600"
                        }
                    },
                    appnexus: {
                        id: 24256982
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567724,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567654,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105479,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105479,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786169'
                        },
                        desktop: {
                            id: '786170'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377767'
                        },
                        desktop: {
                            adSlot: '4377768'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [300, 50],
                        [320, 100],
                        [300, 250],
                        [300, 100],
                        [250, 250]
                    ],
                    desktop: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            pe_inline: {
                code: '/422621568/larepublica.pe_inline',
                div: 'inline',
                id: 24256978,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256978
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567632,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567632,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105477,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105477,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786163'
                        },
                        desktop: {
                            id: '786163'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377761'
                        },
                        desktop: {
                            adSlot: '4377761'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_inline2: {
                code: '/422621568/larepublica.pe_inline2',
                div: 'inline_two',
                id: 24256979,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline2_300x600"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline2_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256979
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567706,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567634,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105478,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105478,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786164'
                        },
                        desktop: {
                            id: '786165'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377762'
                        },
                        desktop: {
                            adSlot: '4377763'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 600],
                        [300, 450],
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_inline3: {
                code: '/422621568/larepublica.pe_inline3',
                div: 'inline_three',
                id: 24256980,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_inline3_300x250"
                        }
                    },
                    appnexus: {
                        id: 24256980
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567638,
                            siteId: 309812
                        },
                        desktop: {
                            zoneId: 1567638,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105699,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 105699,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786166'
                        },
                        desktop: {
                            id: '786166'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377764'
                        },
                        desktop: {
                            adSlot: '4377764'
                        }
                    }
                },
                size: {
                    phone: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ],
                    desktop: [
                        [300, 250],
                        [250, 250],
                        [320, 100],
                        [320, 50],
                        [300, 100],
                        [300, 50]
                    ]
                },
            },
            pe_Sticky: {
                code: '/422621568/larepublica.pe_Sticky',
                div: 'Sticky',
                id: 24256975,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_sticky_HDX"
                        }
                    },
                    appnexus: {
                        id: 24256975
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 2033620,
                            siteId: 309830
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 105698,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786158'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377758'
                        }
                    }
                },
                size: {
                    phone: [
                        [320, 50],
                        [320, 100],
                        [300, 100],
                        [300, 50]
                    ]
                }
            },
            pe_Billboard: {
                code: '/422621568/larepublica.pe_Billboard',
                div: 'Billboard',
                id: 24256986,
                bidder: {
                    triplelift: {
                        mobile: {
                            inventoryCode: "larepublica_pe_Billboard_320x100"
                        },
                        desktop: {
                            inventoryCode: "larepublica_pe_Billboard_728x90"
                        }
                    },
                    appnexus: {
                        id: 24256986
                    },
                    rubicon: {
                        id: 21814,
                        phone: {
                            zoneId: 1567692,
                            siteId: 309830
                        },
                        desktop: {
                            zoneId: 1567620,
                            siteId: 309812
                        }
                    },
                    smartadserver: {
                        id: 330767,
                        domain: "https://prg.smartadserver.com",
                        phone: {
                            formatId: 109195,
                            pageId: 1475335
                        },
                        desktop: {
                            formatId: 109195,
                            pageId: 1475335
                        }
                    },
                    ix: {
                        phone: {
                            id: '786174'
                        },
                        desktop: {
                            id: '786175'
                        }
                    },
                    pubmatic: {
                        id: '161699',
                        phone: {
                            adSlot: '4377772'
                        },
                        desktop: {
                            adSlot: '4377773'
                        }
                    }
                },
                size: {
                    desktop: [
                        [970, 90],
                        [940, 90],
                        [728, 90]
                    ],
                    phone: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
            },
        }
    };
    var userAgent = navigator.userAgent.toLowerCase();
    var isPhone = /iPhone|android|iPod/i.test(userAgent);

    var sizeDevice = (size) => {
        let sizes = null;
        if (isPhone) {
            sizes = size.mobile;
        } else {
            sizes = size.desktop;
        }
        return sizes;
    };

    var sizeBidder = (bidder) => {
        if (bidder && Object.keys(bidder)) {
            var arrayBidder = [
                {
                    bidder: "appnexus",
                    params: {
                        placementId: bidder["appnexus"]["id"]
                    }
                }
            ];

            if (bidder["rubicon"] && Object.keys(bidder["rubicon"]) && Object.keys(bidder["rubicon"]).length) {
                let siteId_Rubicon = '';
                let zoneId_Rubicon = '';

                if (isPhone && bidder["rubicon"]["phone"]) {
                    siteId_Rubicon = bidder["rubicon"]["phone"]["siteId"];
                    zoneId_Rubicon = bidder["rubicon"]["phone"]["zoneId"];
                } else if (bidder["rubicon"]["desktop"]) {
                    siteId_Rubicon = bidder["rubicon"]["desktop"]["siteId"];
                    zoneId_Rubicon = bidder["rubicon"]["desktop"]["zoneId"];
                }

                let rubicon = {
                    bidder: "rubicon",
                    params: {
                        accountId: bidder["rubicon"]["id"],
                        siteId: siteId_Rubicon,
                        zoneId: zoneId_Rubicon
                    }
                }

                arrayBidder.push(rubicon);
            }

            if (bidder["smartadserver"] && Object.keys(bidder["smartadserver"]) && Object.keys(bidder["smartadserver"]).length) {
                let formatId_smartadserver = '';
                let pageId_smartadserver = '';

                if (isPhone && bidder["smartadserver"]["phone"]) {
                    formatId_smartadserver = bidder["smartadserver"]["phone"]["formatId"];
                    pageId_smartadserver = bidder["smartadserver"]["phone"]["pageId"];
                } else if (bidder["smartadserver"]["desktop"]) {
                    formatId_smartadserver = bidder["smartadserver"]["desktop"]["formatId"];
                    pageId_smartadserver = bidder["smartadserver"]["desktop"]["pageId"];
                }

                let smartadserver = {
                    bidder: "smartadserver",
                    params: {
                        siteId: bidder["smartadserver"]["id"],
                        domain: bidder["smartadserver"]["domain"],
                        formatId: formatId_smartadserver,
                        pageId: pageId_smartadserver
                    }
                }

                arrayBidder.push(smartadserver);
            }

            if (bidder["ix"] && Object.keys(bidder["ix"]) && Object.keys(bidder["ix"]).length) {
                let siteId_ix = '';

                if (isPhone && bidder["ix"]["phone"]) {
                    siteId_ix = bidder["ix"]["phone"]["id"];
                } else if (bidder["ix"]["desktop"]) {
                    siteId_ix = bidder["ix"]["desktop"]["id"];
                }

                let ix = {
                    bidder: "ix",
                    params: {
                        siteId: siteId_ix
                    }
                }

                arrayBidder.push(ix);
            }

            if (bidder["pubmatic"] && Object.keys(bidder["pubmatic"]) && Object.keys(bidder["pubmatic"]).length) {
                let adSlot_pubmatic = '';

                if (isPhone && bidder["pubmatic"]["phone"]) {
                    adSlot_pubmatic = bidder["pubmatic"]["phone"]["adSlot"];
                } else if (bidder["pubmatic"]["desktop"]) {
                    adSlot_pubmatic = bidder["pubmatic"]["desktop"]["adSlot"];
                }

                let pubmatic = {
                    bidder: "pubmatic",
                    params: {
                        publisherId: bidder["pubmatic"]["id"],
                        adSlot: adSlot_pubmatic,
                    }
                }

                arrayBidder.push(pubmatic);
            }
            if (bidder["triplelift"] && Object.keys(bidder["triplelift"]) && Object.keys(bidder["triplelift"]).length) {
                let inventoryCode_tripleLift
                
                if (isPhone && bidder["triplelift"]["mobile"]) {
                    inventoryCode_tripleLift = bidder["triplelift"]["mobile"]["inventoryCode"];
                } else if (bidder["triplelift"]["desktop"]) {
                    inventoryCode_tripleLift = bidder["triplelift"]["desktop"]["inventoryCode"];
                }
                const triplelift = {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: inventoryCode_tripleLift,
                    }
                }
                arrayBidder.push(triplelift);
            }
            return arrayBidder
        }
    }

    var checkExist = (container) => {
        return document.getElementById(container);
    };

    var itemsLoop = null;

    if (pageAds) {
        if (pageAds === "HOME") {
            itemsLoop = ads.home;
        }
        if (pageAds === "SECTION") {
            itemsLoop = ads.secciones;
        }
        if (pageAds === "TAG") {
            itemsLoop = ads.tag;
        }
        if (pageAds === "INTERNA") {
            itemsLoop = ads.interna;
        }
    }

    if (itemsLoop) {
        var prebidTags = [];
        if (Object.keys(itemsLoop).length) {
            Object.values(itemsLoop).map(item => {
                var { code, id, bidder, size, div } = item;
                var itemTag = {
                    code: code,
                    mediaTypes: {
                        banner: {
                            sizes: sizeDevice(size)
                        }
                    },
                    bids: sizeBidder(bidder)
                };


                if (checkExist(div)) {
                    // console.log('div exists', div)
                    if (window.matchMedia("(min-width: 700px)").matches) {
                        if (pageAds === "HOME") {
                            if (
                                div != "Middle2" &&
                                div != "inline" &&
                                div != "inline_two" &&
                                div != "inline_three" &&
                                div != "Strip" &&
                                div != "Sticky"
                            ) {
                                prebidTags.push(itemTag);
                            }
                        }

                        if (pageAds === "INTERNA" || pageAds === "SECTION" || pageAds === "TAG") {
                            if (div != "Strip" && div != "Sticky") {
                                prebidTags.push(itemTag);
                            }
                        }
                    } else {
                        if (
                            div != "Top" &&
                            div != "Lateral_Left" &&
                            div != "Lateral_Right"
                        ) {
                            prebidTags.push(itemTag);
                        }
                    }
                }
                //  console.log('prebidTags>>>', prebidTags)
            });
        }
        adUnits = prebidTags;
    }

    pbjs.bidderSettings = {
        rubicon: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * .85;
            }
        },
        smartadserver: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * .75;
            }
        },
        ix: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * .75;
            }
        },
        pubmatic: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * .75;
            }
        }
    }

    pbjs.que.push(function () {
        /*console.log('pbjs adUnits', adUnits);*/
        pbjs.addAdUnits(adUnits);
        pbjs.setConfig({ priceGranularity: "dense" });
        /*pbjs.setConfig({debug: "true"});*/
        pbjs.requestBids({
            bidsBackHandler: sendAdserverRequest,
            timeout: PREBID_TIMEOUT
        });
    });

    function sendAdserverRequest() {
        function initAdServerInterval() {
            if (googletag.pubadsReady) {
                if (pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;
                googletag.cmd.push(function () {
                    pbjs.que.push(function () {
                        pbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh();
                        googletag.cmd.push(function () {
                            var privateDefineSlot = googletag.defineSlot.bind(googletag);
                            googletag.defineSlot = function () {
                                var result = privateDefineSlot.apply(void 0, arguments);
                                setTimeout(function () {
                                    googletag.pubads().refresh([result]);
                                }, 10);
                                return result;
                            };
                        });
                    });
                });
                clearInterval(intervalId);
            }
        }

        var intervalId = setInterval(initAdServerInterval, 100);
    }

    setTimeout(function () {
        sendAdserverRequest();
    }, FAILSAFE_TIMEOUT);
}

googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});

// initPrebid();

window.addEventListener('load', function () {
    setTimeout(function () {
        initPrebid();
    }, 500);
});
