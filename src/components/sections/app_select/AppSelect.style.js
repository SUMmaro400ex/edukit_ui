export const styles = {
    wrapper: {
        height: '100%',
        width: 80,
        background: '#607D8B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconWrapper: {
        height: 80,
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #BDBDBD',
        transition: 'all 0.5s',
        '& i': {
            color: 'white',
            fontSize: '24px',
        },
        '&:hover': {
            background: '#455A64',
        }
    },
    active: {
        background: '#00BCD4',
        '&:hover': {
            background: '#00BCD4',
        }
    },
    signOut: {
        height: 80,
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& i': {
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
        },
    }
};