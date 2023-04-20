import NextHead from "next/head";
import { useRouter } from "next/router";
import { convertirFecha } from "util/convertirFecha";
import { getDataMedia } from "util/getDataMedia";
import schemaAuthorPage from "./SchemaAutor";

const Schemas = ({ articlesData = [], data, type, listNote, speakable = true,showCustom=false}) => {
    const router = useRouter();
    const { asPath } = router;
    let SchemaItemList = null;
    let SchemaAutor = null;
    let schemaInternalMicrodata = [];
    let dateTime = "";    
    const OrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: `${process.env.SITE_NAME}`,
        legalName: `${process.env.SITE_LEGAL_NAME}`,
        url: `${process.env.SITE_DOMAIN_URL}`,
        logo: `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`,
        foundingDate: "1981",
        founders: [
            {
                "@type": "Person",
                name: "Gustavo Mohme Llona",
            },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jiron Camana 320",
            addressLocality: "Lima Cercado",
            addressRegion: "LIMA",
            postalCode: "15001",
            addressCountry: "PERU",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "[+51-711-6000]",
            email: "marlene.wu@glr.pe",
        },
        sameAs: [
            `${process.env.SITE_FACEBOOK}`,
            `${process.env.SITE_YOUTUBE}`,
            `${process.env.SITE_TWITTER}`,
            `${process.env.SITE_INSTAGRAM}`,
        ],
    };
    const OrganizationSchemaCustom = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "id" : "https://larepublica.pe/politicas-y-estandares/",
        name: `${process.env.SITE_NAME}`,
        legalName: `${process.env.SITE_LEGAL_NAME}`,
        url: `${process.env.SITE_DOMAIN_URL}`,
        logo: `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`,
        foundingDate: "1981",
        founders: [
            {
                "@type": "Person",
                name: "Gustavo Mohme Llona",
            },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jiron Camana 320",
            addressLocality: "Lima Cercado",
            addressRegion: "LIMA",
            postalCode: "15001",
            addressCountry: "PERU",
        },
        sameAs: [
            `${process.env.SITE_FACEBOOK}`,
            `${process.env.SITE_INSTAGRAM}`,
            `${process.env.SITE_YOUTUBE}`,
            `${process.env.SITE_TWITTER}`,
        ]
    };

    const NewsMediaOrganization = {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        name: `${process.env.SITE_NAME}`,
        ethicsPolicy: "https://larepublica.pe/politicas-y-estandares/#principios-eticos",
        masthead: "https://larepublica.pe/politicas-y-estandares/#equipo-editorial",
        missionCoveragePrioritiesPolicy: "https://larepublica.pe/politicas-y-estandares/#quienes-somos",
        diversityPolicy: "https://larepublica.pe/politicas-y-estandares/#diversidad-en-la-redaccion",
        correctionsPolicy: "https://larepublica.pe/politicas-y-estandares/#politica-de-correcciones",
        verificationFactCheckingPolicy: "https://larepublica.pe/politicas-y-estandares/#revision-de-datos-y-verificacion",
        unnamedSourcesPolicy: "https://larepublica.pe/politicas-y-estandares/#fuentes-sin-identificacion",
        actionableFeedbackPolicy: "https://larepublica.pe/politicas-y-estandares/#retroalimentacion-viable",
        ownershipFundingInfo: "https://larepublica.pe/politicas-y-estandares/#estructura-empresarial-y-fundacion",
        diversityStaffingReport: "https://larepublica.pe/politicas-y-estandares/#diversidad-en-la-redaccion",
        noBylinesPolicy: "https://larepublica.pe/autor/la-republica",
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "Contacto",
                email: "mesadigital@glr.pe",
                url: "https://larepublica.pe/politicas-y-estandares/#diversidad-en-la-redaccion",
            },
        ],
    };
    const webSiteNomadic = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        name: process.env.SITE_NAME,
        alternateName: process.env.SITE_NAME_ALTERNATIVE,
        url: process.env.SITE_DOMAIN_URL,
        potentialAction: [
            {
                "@type": "SearchAction",
                target: [
                    {
                        "@type": "EntryPoint",
                        urlTemplate: "https://larepublica.pe/buscador?buscando={search_term_string}",
                    },
                ],
                "query-input": "required name=search_term_string",
            },
        ],
    };
    const webSiteJonatan = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        name: process.env.SITE_NAME,
        alternateName: process.env.SITE_NAME_ALTERNATIVE,
        url: process.env.SITE_DOMAIN_URL,
    };

    // SchemaFAQPage para el precio del dolar
    if (listNote && listNote[0]?.created_at) {
        dateTime = convertirFecha(listNote[0]?.created_at, "short");
    }

    const setQuestion = [
        {
            faq: "¿Qué es el tipo de cambio?",
            answer: "El tipo de cambio es una referencia que se usa en el mercado cambiario para conocer el número de unidades de moneda nacional (nuevo sol) que deben pagarse para obtener una moneda extranjera (dólar americano), o en sentido inverso.",
        },
        {
            faq: "¿Por qué el dólar sube o baja en el Perú?",
            answer: "Existen varios factores que generan la variación del dólar. Uno de ellos es la oferta y demanda, es decir cada vez que si hay abundancia de dólares el tipo de cambio baja y a la inversa, cualquier salida de dólares eleva su precio.También están otras variantes como la percepción de inversionistas locales e internacionales y la especulación, una práctica común en todos los mercados.",
        },
        {
            faq: "¿Por qué el dólar cotiza diferente en cada país?",
            answer: "Uno de los aspectos importantes para determinar la cotización del dólar en cada país es el nivel de inflación que tiene esa nación. También están factores como los niveles de tasas de interés, el nivel de endeudamiento del país y las decisiones político económicas.",
        },
        {
            faq: "¿Cuándo conviene convertir dólares a soles peruanos?",
            answer: "El mejor momento de hacer la conversión de la divisa es durante las mañanas cuando el mercado de monedas esté abierto y siguiendo la tendencia del dólar en las últimas semanas.",
        },
        {
            faq: "¿Dónde comprar dólares baratos en Perú?",
            answer: "Las opciones para comprar dólar en nuestro país se ubican en los bancos, que da la facilidad de poder hacer distintas operaciones financieras, pero a precios menos competitivos; así como en las casas de cambios y cambistas de la calle, que si bien tienen una buena tasa de cambio se debe tener en cuenta los factores de riesgo como la zona y cuidado con los billetes falsos.",
        },
    ];

    const faqPageItem = [];

    setQuestion.map((question) => {
        faqPageItem.push({
            "@type": "Question",
            name: question.faq,
            dateCreated: dateTime,
            acceptedAnswer: {
                "@type": "Answer",
                text: question.answer,
            },
        });
    });

    const FAQPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: "https://larepublica.pe/economia/precio-del-dolar/",
        mainEntity: faqPageItem,
    };
    //

    if (listNote && Object.keys(listNote) && Object.keys(listNote).length > 0) {
        let urlListItem = `${process.env.SITE_DOMAIN_URL}${data.slug || "/"}`;
        let listElement = listNote.filter(listItem=>listItem.slug).map((item, key)=>({
            "@type": "ListItem",
            position: `${key + 1}`,
            url: `${process.env.SITE_DOMAIN_URL}${item.slug}`,
        }));
        const ItemList = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            url: `${urlListItem}`,
            itemListElement: listElement,
        };

        SchemaItemList = <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemList) }} />;
    }

    let showContentVideos = [];
    let schemaInternalLDJSON = null;

    // SchemaAutor
    if (data && Object.keys(data).length > 0 && articlesData.length > 0 && asPath.length > 7 && asPath.includes("/autor/")) {
        SchemaAutor = schemaAuthorPage(data, articlesData);
    }
    
    // ARTICLE
    /* Initial value for section */
    let sectionData = {
        slug: "/archivo",
        name: "Archivo"
    }
    if (data && data.__typename == "ArticleType") {
        /* Validation for get parentCategory */
        if(data.data?.categories?.length>0){
            const {categories} = data.data;
            const mainSlug = categories[0].slug.split("/")[1]
            const sectionValidated = categories?.find((category) => category.slug.endsWith(mainSlug)) || categories[0];
            if(sectionValidated){
                sectionData = sectionValidated
            }
        }
        
        let authorData = data.data?.authors;
        if (authorData?.length > 0) {
            authorData = authorData[0];
        }
        const articleDate = data.update_date?.split(" ").join("T") + "-05:00";
        const articleMultimedia = data.data?.multimedia;
        const articleImageUrl =
            articleMultimedia?.find((media) => media.type == "video")?.data?.image_path ||
            articleMultimedia?.find((media) => media.type == "image")?.path ||
            process.env.IMAGE_DEFAULT_1250x735;
        const articleImageData = {
            "@type": "ImageObject",
            url: articleImageUrl,
            width: 1250,
            height: 735,
            representativeOfPage: true,
            author: {
                "@type": "Person",
                name: authorData?.fullname || "La República",
            },
            copyrightHolder: {
                "@type": "Organization",
                name: process.env.SITE_NAME,
            },
        };
        const ImageObject = {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            author: authorData?.fullname || "La República",
            contentLocation: "Lima, Peru",
            url: articleImageUrl,
            width: 1250,
            height: 735,
            datePublished: articleDate,
            description: `${data.data?.teaser || ""}`,
            name: `${data.title || ""}`,
        };
        const BreadcrumbList = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@id": `${process.env.SITE_DOMAIN_URL}/`,
                        name: "La República",
                    },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@id": `${process.env.SITE_DOMAIN_URL}${sectionData.slug}`,
                        name: `${sectionData.name}`,
                    },
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        "@id": `${process.env.SITE_DOMAIN_URL}${data.slug}`,
                        name: `${data.title}`,
                    },
                },
            ],
        };
        const contentArticle =
            data?.data?.content_elements?.map((element) => element.content.trim().replace(/(<([^>]+)>)/gi, "")).join(",") || "";
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: data?.title || "",
            alternativeHeadline: data?.metadata_seo?.seo_title || data?.title || "",
            url: `${process.env.SITE_DOMAIN_URL}${data.slug}`,
            datePublished: articleDate,
            dateModified: articleDate,
            dateline: articleDate,
            articleSection: sectionData.name,
            articleBody: contentArticle,
            creator: {
                "@type": "Person",
                name: authorData?.fullname || "La República",
            },
            description: data?.data?.teaser,
            publisher: {
                "@type": "Organization",
                name: `${process.env.SITE_NAME}`,
                url: `${process.env.SITE_DOMAIN_URL}`,
                logo: {
                    "@type": "ImageObject",
                    url: `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`,
                    width: 296,
                    height: 60,
                },
                sameAs: [`${process.env.SITE_FACEBOOK}`, `${process.env.SITE_TWITTER}`],
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${process.env.SITE_DOMAIN_URL}${data.slug}`,
            },
            author: [
                {
                    "@type": "Person",
                    name: authorData?.fullname || "La República",
                    url: `${process.env.SITE_DOMAIN_URL}${authorData?.slug ||  "/autor/la-republica"}`,
                },
            ],
            image: articleImageData,
            ...(speakable && {
                speakable: {
                    "@type": "SpeakableSpecification",
                    xpath: ["/html/head/meta[@property='og:title']/@content", "/html/head/meta[@name='description']/@content"],
                },
            }),
        };
        let articleRelatedSchema;
        const relatedItems = data.data?.related?.items;
        if (relatedItems?.length > 0) {
            articleRelatedSchema = {
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: relatedItems.map((related, key) => ({
                    "@type": "ListItem",
                    position: key + 1,
                    url: `https://larepublica.pe${related.slug}`,
                })),
            };
        }

        schemaInternalLDJSON = [articleSchema, ImageObject, BreadcrumbList, articleRelatedSchema];
        const articleVideo = data?.data?.multimedia?.find((media) => media.type == "video");

        if (articleVideo) {
            let videoUrl = "";
            let mediastreamData = articleVideo?.metadata?.find((meta) => meta.key == "mediastream")?.value;
            if (mediastreamData) {
                mediastreamData = JSON.parse(mediastreamData)?.original_video;
                videoUrl = mediastreamData;
            } else {
                videoUrl = articleVideo?.path || articleVideo.data?.embed?.match(/(src=)["'A-Za-z . / : 0-9]*/);
                const mediaInfo = getDataMedia(videoUrl);
                if (mediaInfo?.contentUrl) {
                    videoUrl = mediaInfo.contentUrl;
                } else {
                    let embedMedia = articleVideo.data?.embed?.match(/(src=)["'A-Za-z . / : 0-9]*/);
                    if (embedMedia?.length > 0) {
                        videoUrl = embedMedia[0];
                    }
                }
            }

            const videoSchema = {
                "@type": "VideoObject",
                name: articleVideo.data?.title || data?.title || "",
                thumbnailUrl: articleVideo.data?.image_path,
                description: articleVideo.data?.alt || data.data?.teaser || "",
                uploadDate: articleDate,
                contentUrl: videoUrl,
                duration: "PT3M1S",
            };
            schemaInternalMicrodata = [videoSchema];
        }
        const contentVideos = [
            ...(data.data?.detected_elements?.iframes?.items || []),
            ...(data.data?.detected_elements?.embeds?.items || []),
        ];

        showContentVideos = contentVideos?.forEach((item) => {
            if (item) {
                const videoBodySchema = {
                    "@type": "VideoObject",
                    name: data.title || "",
                    thumbnailUrl:
                        data?.data?.multimedia?.find((media) => media.type == "image")?.path ||
                        data?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
                        process.env.IMAGE_DEFAULT_1250x735,
                    description: data.data.teaser || data.title || "",
                    uploadDate: articleDate,
                    contentUrl: item.src,
                    duration: "PT3M1S",
                };
                schemaInternalMicrodata.push(videoBodySchema);
            }
        });
    }
    return (
        <>
            <NextHead>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(NewsMediaOrganization) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(showCustom ?  OrganizationSchemaCustom : OrganizationSchema ) }} />
                {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SiteNavigationSchema) }} /> */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(asPath === "/" ? webSiteNomadic : webSiteJonatan) }}
                />
                {SchemaItemList}
                {SchemaAutor}
                {schemaInternalLDJSON?.map((schemaItem, index) => (
                    <script
                        key={`json-schema-${index}`}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
                    />
                ))}
                {asPath === "/economia/precio-del-dolar" && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }} />
                )}
            </NextHead>
            {schemaInternalMicrodata?.map((schemaInternal, index) => {
                return (
                    <div key={`microdata-${index}`} itemScope itemType={`https://schema.org/${schemaInternal["@type"]}`}>
                        {Object.keys(schemaInternal)
                            .filter((schemaKey) => schemaKey !== "@type")
                            .map((schemaKey, index) => (
                                <meta key={`microdata-attr-${index}`} itemProp={schemaKey} content={schemaInternal[schemaKey]} />
                            ))}
                    </div>
                );
            })}
            {showContentVideos}
        </>
    );
};

export { Schemas };
