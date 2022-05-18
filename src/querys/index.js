import { gql } from "@apollo/client";

export const INFO_EPISODES = gql`
query($pagina: Int) {
  episodes(page: $pagina) {
    results {
      name,
      air_date,
      episode,
      characters {
        id
      }
    }
  }
}
`;