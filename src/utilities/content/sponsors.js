export default function (data) {
  return {
    title: data?.sanitySponsorsPage?.title ?? '',
    description: data?.sanitySponsorsPage?.description ?? '',
    catchLine: data?.sanitySponsorsPage?.catchLine ?? '',
    sponsorshipOptions: data?.sanitySponsorsPage?.sponsorshipOptions ?? '',
    cta: data?.sanitySponsorsPage?.cta ?? { title: '- -' },
  };
}
