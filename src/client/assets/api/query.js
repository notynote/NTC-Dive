import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


const listNtcDive = gql`
    query {
        listNtcDiveModels {
            items {
                id
                month
                tripCode
                dates
                boat
                availability
            }
        }
    }
`;

const composeScheduleData = graphql((listNtcDive), {
    options: data => ({
        fetchPolicy: "cache-and-network"
    }),
    props: props => ({
        listDataQuery: listData => {
            return props.data.fetchMore({
                query: listData,
                variables: {
                    listData
                },
                updateQuery: (previousResult) => ({
                    ...previousResult,
                  })
            })
        },
        data: props.data
    })
})

export { composeScheduleData }