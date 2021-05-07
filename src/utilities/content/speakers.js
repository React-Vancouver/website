export default function (data) {
  return {
    title: data?.sanitySpeakersPage?.title ?? '',
    description: data?.sanitySpeakersPage?.description ?? '',
    catchLine: data?.sanitySpeakersPage?.catchLine ?? '',
    speakersData: data?.allSanityPerson?.nodes ?? [],
    topicsData: [
      'state management',
      'CSS-in-JS',
      'jam stack',
      'UI',
      'real time',
      'GraphQL',
      'design systems'
    ],
  };
}
