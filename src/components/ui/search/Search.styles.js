export const styles = {
    searchBox: {
        transition: 'all 0.4s',
        maxWidth: 400,
        width: 400,
        borderRadius: 15,
        border: '1px solid #455A64',
        height: 30,
        display: 'flex',
        alginItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '& i': {
            alignSelf: 'center',
        }
    },
    searchBoxCollapsed: { maxWidth: 30 },
    input: { border: 'none', width: '90%' },
};