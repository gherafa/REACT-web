const AppStyle = {
  navbarHoverClosed: {
    backgroundColor: 'white',
    transition: 'all 0.3s ease 0s',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '0%'
  },
   navbarHoverOpen: {
    backgroundColor: 'white',
    transition: 'all 0.3s ease 0s',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '20%',
    zIndex: 1,
    backgroundColor: 'whitesmoke',
    flexDirection: 'column'
  }
};

export default AppStyle;