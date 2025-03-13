const selectColors = {
  input: {
    text: {
      default: '#B4B5B6',
      hover: '#FFFFFF',
      pressed: '#FFFFFF',
    },
    background: {
      default: '#0B0E12',
      hover: '#0F1318',
      pressed: '#0B0E12',
    },
    outline: {
      pressed: '#171D25',
    },
  },
  dropdown: {
    background: {
      default: '#0F1318',
    },
    option: {
      text: {
        default: '#B4B5B6',
        hover: '#FFFFFF',
        pressed: '#FFFFFF',
      },
      background: {
        default: '#0F1318',
        hover: '#141A21',
        pressed: '#141A21',
      },
    },
  },
}

const buttonColors = {
  background: {
    default: '#EB0237',
    pressed: '#A01131',
    disabled: '#701328',
  },
  text: {
    default: '#FFFFFF',
    pressed: '#FFFFFF',
    disabled: '#787878',
  },
}

const statusCardColors = {
  text: '#FFFFFF',
  background: {
    LIVE: '#43AD28',
    FINISHED: '#EB0237',
    PREPARING: '#EB6402',
  },
}

const matchCardColors = {
  background: '#0B0E12',
}

const playerCardColors = {
  background: '#101318',
  text: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA70',
  },
}

const alertColors = {
  background: '#0F1318',
  text: '#FFFFFF',
}

const statisticsCardColors = {
  background: '#101318',
  text: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA70',
  },
}

const separatorColor = {
  text: '#313A47',
  lineColor: '#13181F',
}

export const colors = {
  background: '#090909',
  white: '#FFFFFF',
  select: selectColors,
  button: buttonColors,
  statusCard: statusCardColors,
  matchCard: matchCardColors,
  alert: alertColors,
  playerCard: playerCardColors,
  statisticsCard: statisticsCardColors,
  separator: separatorColor,
}
