import {
  Container,
  Footer as MantineFooter,
  Grid,
  useMantineTheme,
} from '@mantine/core'

export const Footer = () => {
  const theme = useMantineTheme()

  return (
    <MantineFooter height={theme.other!.footerH}>
      <Container>
        <Grid>
          <Grid.Col>About</Grid.Col>
        </Grid>
      </Container>
    </MantineFooter>
  )
}
