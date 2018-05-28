import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as action from './action'
import { HomePageStoreState } from './reducer'

const styles = (theme: any): any => ({
  homePageContainer: {
    background: '#F4F4F4',
    boxSizing: 'border-box',
    margin: '0 auto',
    maxWidth: 1180,
    minHeight: 'calc(100vh - 64px - 80px)',
    padding: 24,
    [theme.breakpoints.down('xs')]: {
      padding: 8
    }
  }
})

interface IHomePageState {
  openFullScreen: boolean,
}

interface IHomePageProps {
  children?: React.ReactNode,
  classes: any,
  loading: boolean,
  comments: string[],
  queryProfile: () => void
}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  public state: IHomePageState = {
    openFullScreen: false
  }

  public componentDidMount() {
    const { queryProfile } = this.props;
    queryProfile();
  }

  public render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.homePageContainer}>Home Page</div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: HomePageStoreState) => ({
  comments: state.getIn(['home', 'profile']),
  loading: state.getIn(['home', 'profileLoading']),
})

const mapDispatchToProps = (dispatch: Dispatch<action.HomePageAction>) => {
  return {
    queryProfile: () => dispatch(action.queryProfile())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<any>(
  withConnect,
  withStyles(styles)
)(HomePage);