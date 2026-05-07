import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ONE_HOP_REDIRECTS = new Map<string, string>([
  ["/teeth-whitening/", "/teeth-whitening"],
  ["/booking-cancellation-policy/", "/booking-cancellation-policy"],
  ["/iv-vitamin-drip/", "/iv-vitamin-drip"],
  ["/terms-of-use/", "/terms-of-use"],
  ["/complaints-policy/", "/complaints-policy"],
  ["/1496-2", "/contact-us"],
  ["/1496-2/", "/contact-us"],
  ["/consultation-and-consent-form", "/contact-us"],
  ["/consultation-and-consent-form/", "/contact-us"],
  ["/aesthetics-glossary", "/blog"],
  ["/aesthetics-glossary/", "/blog"],
  ["/im-vitamin-injection", "/iv-vitamin-drip"],
  ["/im-vitamin-injection/", "/iv-vitamin-drip"],
  ["/fat-dissolving-injections", "/body-sculpting-2"],
  ["/fat-dissolving-injections/", "/body-sculpting-2"],
  ["/body-services", "/body-sculpting-2"],
  ["/body-services/", "/body-sculpting-2"],
  ["/ems-treatment", "/body-sculpting-2"],
  ["/ems-treatment/", "/body-sculpting-2"],
  ["/laser-lipo-pads", "/body-sculpting-2"],
  ["/laser-lipo-pads/", "/body-sculpting-2"],
  ["/lymphatic-drainage-massage", "/body-sculpting-2"],
  ["/lymphatic-drainage-massage/", "/body-sculpting-2"],
  ["/wood-therapy", "/body-sculpting-2"],
  ["/wood-therapy/", "/body-sculpting-2"],
  ["/skin-tightening-radio-frequency", "/body-sculpting-2"],
  ["/skin-tightening-radio-frequency/", "/body-sculpting-2"],
]);

export function middleware(request: NextRequest) {
  const destination = ONE_HOP_REDIRECTS.get(request.nextUrl.pathname);
  if (!destination) {
    return NextResponse.next();
  }

  const targetUrl = new URL(destination, request.url);
  return NextResponse.redirect(targetUrl, 308);
}

export const config = {
  matcher: [
    "/teeth-whitening/",
    "/booking-cancellation-policy/",
    "/iv-vitamin-drip/",
    "/terms-of-use/",
    "/complaints-policy/",
    "/1496-2",
    "/1496-2/",
    "/consultation-and-consent-form",
    "/consultation-and-consent-form/",
    "/aesthetics-glossary",
    "/aesthetics-glossary/",
    "/im-vitamin-injection",
    "/im-vitamin-injection/",
    "/fat-dissolving-injections",
    "/fat-dissolving-injections/",
    "/body-services",
    "/body-services/",
    "/ems-treatment",
    "/ems-treatment/",
    "/laser-lipo-pads",
    "/laser-lipo-pads/",
    "/lymphatic-drainage-massage",
    "/lymphatic-drainage-massage/",
    "/wood-therapy",
    "/wood-therapy/",
    "/skin-tightening-radio-frequency",
    "/skin-tightening-radio-frequency/",
  ],
};
