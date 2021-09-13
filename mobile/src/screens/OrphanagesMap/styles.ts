import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito700',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    height: 56,
    position: 'absolute',
    right: 24,
    left: 24,
    bottom: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito700',
    color: '#8fa7b3',
  },

  footerButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
