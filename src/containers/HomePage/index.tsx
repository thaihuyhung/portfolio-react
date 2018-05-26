import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import * as action from './action'
import { HomePageStoreState } from './reducer'

const styles = (theme: any): any => ({
  container: {
    background: '#F4F4F4',
    boxSizing: 'border-box',
    minHeight: 'calc(100vh - 64px)',
    padding: 24,
    [theme.breakpoints.down('xs')]: {
      padding: 8
    }
  }
})

interface IHomePageState {
  openFullScreen: boolean,
  selectedImageUrl: string,
  selectedImageTitle: string;
}

interface IHomePageProps {
  children?: React.ReactNode,
  loading: boolean,
  comments: string[],
  queryComments: () => void
}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  public state: IHomePageState = {
    openFullScreen: false,
    selectedImageTitle: '',
    selectedImageUrl: ''
  }

  public componentDidMount() {
    const { queryComments } = this.props;
    queryComments();
  }

  public onOpenFullScreen = (title: string, url: string) => {
    this.setState({
      openFullScreen: true,
      selectedImageTitle: title,
      selectedImageUrl: url
    })
  }

  public onCloseFullScreen = () => {
    this.setState({
      openFullScreen: false,
      selectedImageTitle: '',
      selectedImageUrl: ''
    })
  }

  public render() {
    return (
      <div>Home Page</div>
    )
  }
}

const mapStateToProps = (state: HomePageStoreState) => ({
  comments: state.getIn(['home', 'comments']),
  loading: state.getIn(['home', 'trendingLoading']),
})

const mapDispatchToProps = (dispatch: Dispatch<action.HomePageAction>) => {
  return {
    queryComments: () => dispatch(action.queryComments())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<any>(
  withConnect,
  withStyles(styles)
)(HomePage);