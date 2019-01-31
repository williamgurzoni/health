import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxFilter: {
    backgroundColor: '#323C47',
    borderRadius: 12,
    marginTop: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  linearGradient: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  filterActive: {
    width: 18,
    height: 18,
    borderRadius: 60,
    backgroundColor: '#19B996',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
  },
  filterInactive: {
    display: 'none',
  },
});

export default styles;