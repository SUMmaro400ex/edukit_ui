export const styles = {
    app: {
        width: 1200,
        height: 800,
        background: '#CFD8DC',
        animation: 'scaleIn 0.8s ease-in',
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    '@keyframes scaleIn': {
        '0%': { 
            transform: 'scale(0)',
            opacity: 0,
        },
        '80%': {
            transform: 'scale(1.03)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1.0)',
        },
    },
};