import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

export const ThemeButton = (): JSX.Element => {
    const { theme, setTheme } = useContext(ThemeContext);

    const swapTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <button onClick={swapTheme} className='appThemeBtn'>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
    );
}