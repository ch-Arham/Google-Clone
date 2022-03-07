// mock response from server to be used for testing in order to not exhaust the server daily quota
export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - covid",
        totalResults: "6",
        searchTerms: "covid",
        count: 6,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "1ce79c713cb85af3d",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.674055,
    formattedSearchTime: "0.67",
    totalResults: "6",
    formattedTotalResults: "6",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "COVID-19 Community Mobility Reports",
      htmlTitle: "<b>COVID</b>-19 Community Mobility Reports",
      link: "https://www.google.com/covid19/mobility/",
      displayLink: "www.google.com",
      snippet:
        "As global communities respond to COVID-19, we've heard from public health officials that the same type of aggregated, anonymized insights we use in products ...",
      htmlSnippet:
        "As global communities respond to <b>COVID</b>-19, we&#39;ve heard from public health officials that the same type of aggregated, anonymized insights we use in products&nbsp;...",
      formattedUrl: "https://www.google.com/covid19/mobility/",
      htmlFormattedUrl: "https://www.google.com/<b>covid</b>19/mobility/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpechhm3ksYMs5RhwpqSZFrTmTRHPhH8NH7JO707N9Lzwrc2Zf3PwHNs0a",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/covid19/mobility/static/social_image.png",
            "twitter:card": "summary_large_image",
            "twitter:image:alt":
              "See how your community is moving around differently due to COVID-19",
            "og:site_name": "COVID-19 Community Mobility Report",
            viewport: "width=device-width, initial-scale=1",
            "og:title": "COVID-19 Community Mobility Report",
            "og:url": "https://www.google.com/covid19/mobility?hl=en",
            "og:description":
              "See how your community is moving around differently due to COVID-19",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/covid19/mobility/static/social_image.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Exposure Notifications: Helping fight COVID-19 - Google",
      htmlTitle:
        "Exposure Notifications: Helping fight <b>COVID</b>-19 - Google",
      link: "https://www.google.com/covid19/exposurenotifications/",
      displayLink: "www.google.com",
      snippet:
        "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you've likely been exposed to COVID-19.",
      htmlSnippet:
        "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you&#39;ve likely been exposed to <b>COVID</b>-19.",
      cacheId: "qtK_I3x8mI4J",
      formattedUrl: "https://www.google.com/covid19/exposurenotifications/",
      htmlFormattedUrl:
        "https://www.google.com/<b>covid</b>19/exposurenotifications/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiwk52X8M4D7_y6Ep34qS_cb3XzaYv0NRD9jNw4Y1hPBwXlkqhv8pO4DAM",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            referrer: "no-referrer",
            "og:image":
              "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
            "twitter:card": "summary_large_image",
            "twitter:image:alt":
              "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
            "og:site_name":
              "Exposure Notifications: Helping fight COVID-19 - Google",
            viewport: "initial-scale=1, minimum-scale=1, width=device-width",
            "og:title":
              "Exposure Notifications: Helping fight COVID-19 - Google",
            "og:url":
              "https://www.google.com/intl/en_us/covid19/exposurenotifications/",
            "og:description":
              "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
            "twitter:image":
              "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Get alerted to COVID-19 exposure.",
      htmlTitle: "Get alerted to <b>COVID</b>-19 exposure.",
      link: "https://www.google.com/covid19/exposurenotifications/select/",
      displayLink: "www.google.com",
      snippet:
        "Exposure Notifications on your smartphone enable contact tracing apps to send you a notification if you've likely been exposed to COVID-19. Contact tracing apps ...",
      htmlSnippet:
        "Exposure Notifications on your smartphone enable contact tracing apps to send you a notification if you&#39;ve likely been exposed to <b>COVID</b>-19. Contact tracing apps&nbsp;...",
      cacheId: "_ICxy3JiQX4J",
      formattedUrl:
        "https://www.google.com/covid19/exposurenotifications/select/",
      htmlFormattedUrl:
        "https://www.google.com/<b>covid</b>19/exposurenotifications/select/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiwk52X8M4D7_y6Ep34qS_cb3XzaYv0NRD9jNw4Y1hPBwXlkqhv8pO4DAM",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
            "twitter:card": "summary_large_image",
            "twitter:image:alt":
              "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
            "og:site_name":
              "Exposure Notifications: Helping fight COVID-19 - Google",
            viewport: "width=device-width, initial-scale=1",
            "og:title":
              "Exposure Notifications: Helping fight COVID-19 - Google",
            "og:url": "https://g.co/ENS",
            "og:description":
              "Learn how Exposure Notifications, built by Google and Apple, enable apps to send you a notification if you’ve likely been exposed to COVID-19.",
            "twitter:image":
              "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/Sne21Iu5L03qnE4oTMtjmUWfOlM8zUwrfNXCAklun4wHuVi-u1Jd-7ukoXTCuiNnzl2KqTDy6gBizpMB7oU6BxHnQnFfGbh-OGoL=w1200",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "COVID-19: $800+ million to support small businesses and crisis ...",
      htmlTitle:
        "<b>COVID</b>-19: $800+ million to support small businesses and crisis ...",
      link: "https://www.google.com/appserve/mkt/p/AM7kBiWNKjRgz9t5KH2gHzTZfJFyo7tQAF8pTYkAdJsqWNsvwzofwyfFMUTEyzbEwt4wCPFV5ZqXQorusz7PfOEjHtfzFQ_FFi52cABsQkDHJSpPXNisFO9eDHyxjoIU4RSsy0fimI5BsiGrm5HwvrUrAWzjbKUK08dpC07TzUu5vm1kmHEDK4YjyPekAElSxIjNdjn1D2UZnCz7je4KSWK78yuhum-MRn8ms-yo0XbPWinbUzOHwURZND7KbVmiFFvBSIKHeKrcFjRs-ullJOWPYh4N2xQqCCBcdxIbDfw1BZV2i6ih8bS1vWx3k0X6JgNohZkB8weDsFt58ZHkxoTXdWYgdQABV9fvSyRl",
      displayLink: "www.google.com",
      snippet:
        "Mar 27, 2020 ... To help during the coronavirus outbreak, we're announcing a new $800 million commitment that includes business funding, grants, credits, ...",
      htmlSnippet:
        "Mar 27, 2020 <b>...</b> To help during the coronavirus outbreak, we&#39;re announcing a new $800 million commitment that includes business funding, grants, credits,&nbsp;...",
      cacheId: "69xMD1hRGiIJ",
      formattedUrl:
        "https://www.google.com/.../ AM7kBiWNKjRgz9t5KH2gHzTZfJFyo7tQAF8pTYkAdJsqWNsvwzofwyf...",
      htmlFormattedUrl:
        "https://www.google.com/.../ AM7kBiWNKjRgz9t5KH2gHzTZfJFyo7tQAF8pTYkAdJsqWNsvwzofwyf...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLCts8Nn8-wC2opAf6PkU716QAGX1F35uOtaHEjsLZ-rQqcIy7zb0LvVZ-",
            width: "322",
            height: "156",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/community.max-1300x1300.jpg",
            "og:type": "article",
            "article:published_time": "2020-03-27",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "COVID-19: $800+ million to support small businesses and crisis response",
            "og:site_name": "Google",
            "twitter:url":
              "https://blog.google/inside-google/company-announcements/commitment-support-small-businesses-and-crisis-response-covid-19/",
            "og:title":
              "COVID-19: $800+ million to support small businesses and crisis response",
            "gtm-tag": "GTM-TRV24V",
            optimize_experiments:
              "[{'id': 'DdJy57J1TGCQji8uytf4yA', 'signature': 'sha256-a039434651e247a91acc1202724f48beba246f035880155710cce74c8ad69ff4'}]",
            "og:description":
              "Our commitment to support small- and medium-sized businesses, health organizations and governments, and health workers.",
            "article:publisher": "https://www.facebook.com/Google/",
            "twitter:image:src":
              "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/community.max-1300x1300.jpg",
            "twitter:site": "@google",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0",
            "twitter:description":
              "How we're supporting SMBs, health organizations and governments, and health workers.",
            "og:url":
              "https://blog.google/inside-google/company-announcements/commitment-support-small-businesses-and-crisis-response-covid-19/",
          },
        ],
        cse_image: [
          {
            src: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/community.max-1300x1300.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Tools & Resources for COVID-19 - Google for Small Business",
      htmlTitle:
        "Tools &amp; Resources for <b>COVID</b>-19 - Google for Small Business",
      link: "https://www.google.com/intl/de_de/business/resources-for-smbs-impacted-by-coronavirus/",
      displayLink: "www.google.com",
      snippet:
        "We're here to help your business through COVID-19. Explore free tools to show up online, stay connected, work remotely and get financial support.",
      htmlSnippet:
        "We&#39;re here to help your business through <b>COVID</b>-19. Explore free tools to show up online, stay connected, work remotely and get financial support.",
      cacheId: "Dit1bPbN-YkJ",
      formattedUrl:
        "https://www.google.com/.../resources-for-smbs-impacted-by-coronavirus/",
      htmlFormattedUrl:
        "https://www.google.com/.../resources-for-smbs-impacted-by-coronavirus/",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/MCeZ7ITQfjeKAe3-XJ5x9p15YFnKNq-YYioJGEOxhQ0t9bgrIFazy9wL5WhhG7q-DrnrioLuGvQd6d3h1ErT2GZoXonkLKO4zDFjPg=w1080-h1080-pp",
            referrer: "no-referrer",
            "twitter:card": "summary_large_image",
            "og:image:width": "1080",
            "og:image:alt":
              "#GoogleForSmallBusiness is here to help you find the right tools to reach your goals. Answer a few questions and we’ll build your personalized plan of Google products",
            "og:type": "website",
            viewport: "width=device-width, initial-scale=1, maximum-scale=5",
            "og:title":
              "Tools & Resources for COVID-19 - Google for Small Business",
            "og:image:height": "1080",
            "og:url":
              "https://smallbusiness.withgoogle.com/news/resources-for-smbs-impacted-by-coronavirus/",
            "og:description":
              "We're here to help your business through COVID-19. Explore free tools to show up online, stay connected, work remotely and get financial support.",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/MCeZ7ITQfjeKAe3-XJ5x9p15YFnKNq-YYioJGEOxhQ0t9bgrIFazy9wL5WhhG7q-DrnrioLuGvQd6d3h1ErT2GZoXonkLKO4zDFjPg=w1080-h1080-pp",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Coronavirus (COVID-19) - Google News",
      htmlTitle: "Coronavirus (<b>COVID</b>-19) - Google News",
      link: "https://google.com/covid19-map/search.php?kw=cabinet",
      displayLink: "google.com",
      snippet:
        "See the map, stats, and news for areas affected by COVID-19 on Google News.",
      htmlSnippet:
        "See the map, stats, and news for areas affected by <b>COVID</b>-19 on Google News.",
      formattedUrl: "https://google.com/covid19-map/search.php?kw=cabinet",
      htmlFormattedUrl:
        "https://google.com/<b>covid</b>19-map/search.php?kw=cabinet",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTK6642Gi8u_zmSZSHF6vdB6RF4vRgzXMEbtv0C8b71-FpKf-0DsQ9BUrE",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "application-name": "News",
            "og:image":
              "https://lh3.googleusercontent.com/Sk9fLyVEoDk-5rONLR5ifRY3mmAmbeNSaM6mMLjLE-XeFLL1s4KXpzDFrRzD5Yl5xufCzbEyLow=s0-w450-h300-n",
            "theme-color": "white",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Coronavirus (COVID-19) - Google News",
            "og:image:width": "450",
            "og:site_name": "Google News",
            "apple-mobile-web-app-title": "News",
            "og:title": "Coronavirus (COVID-19) - Google News",
            "og:image:height": "300",
            "og:image:type": "image/jpeg",
            title: "Coronavirus (COVID-19) - Google News",
            "og:description":
              "See the map, stats, and news for areas affected by COVID-19 on Google News",
            "twitter:image":
              "https://lh3.googleusercontent.com/Sk9fLyVEoDk-5rONLR5ifRY3mmAmbeNSaM6mMLjLE-XeFLL1s4KXpzDFrRzD5Yl5xufCzbEyLow=s0-w450-h300-n",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport: "width=device-width,initial-scale=1,minimal-ui",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "See the map, stats, and news for areas affected by COVID-19 on Google News",
            "mobile-web-app-capable": "yes",
            "og:locale": "en-US",
            "og:url":
              "https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US:en",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/Sk9fLyVEoDk-5rONLR5ifRY3mmAmbeNSaM6mMLjLE-XeFLL1s4KXpzDFrRzD5Yl5xufCzbEyLow=s0-w450-h300-n",
          },
        ],
      },
    },
  ],
};
