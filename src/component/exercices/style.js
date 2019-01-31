import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#262F38',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  boxItem: {
    backgroundColor: '#323C47',
    borderRadius: 12,
    height: 115,
    marginTop: 24,
    marginBottom: 7,
    flexDirection: 'row',
  },
  boxItemLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxItemRight: {
    flex: 1.5,
    paddingTop: 18,
    paddingLeft: 10,
  },
  circle: {
    backgroundColor: '#262F38',
    height: 100,
    width: 100,
    borderRadius: 60,
  },
  image: {
    position: 'absolute',
    top: -25,
    left: -20,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Montserrat SemiBold',
  },
  info: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Montserrat SemiBold',
  },
  infoImg: {
    marginHorizontal: 5,
    borderLeftWidth: 1,
    borderColor: '#515962',
  },
  btnTodayYesterday: {
    borderRadius: 15,
    paddingHorizontal: 14,
    marginTop: 8,
    paddingVertical: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  btnTodayYesterdayText: {
    fontSize: 9,
    color: '#FFFFFF',
    fontFamily: 'Montserrat Regular',
  },
  todayActive: {
    backgroundColor: '#FD3C29',
  },
  yesterdayActive: {
    backgroundColor: '#19B996',
  },
  inactive: {
    borderColor: '#515962',
    borderWidth: 1,
  },
});

export default styles;