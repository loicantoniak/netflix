export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaires",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comédies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Enfants",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel-good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drame",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Enfants",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
