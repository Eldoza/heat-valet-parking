import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1 style={{ fontFamily: 'Merriweather' }}>Heat Valet Parking</h1>
          <Typography paragraph style={{ fontFamily: 'Lato' }}>
            Finding parking almost anywhere in Chicago can be a challenge. Don't
            ruin your day by getting stressed and upset over finding a parking
            spot—let a parking attendant from Heat Valet Parking Services, Inc
            take care of everything for you.If you are worried about your
            reservations and don't want to spend time circling the block to find
            parking, our valet company provides event parking so you can enjoy
            your event without the worry.A friendly employee will take your car
            and information—so you don't have to worry about a thing!
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Layout>
  )
}

export default IndexPage
