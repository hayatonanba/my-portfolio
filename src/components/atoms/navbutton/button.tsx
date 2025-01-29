import { tv } from 'tailwind-variants';

type Props = {
    text:string
    color:"primary"| "secondary" | "success"
}
 
const buttonStyle = tv({
  base: 'font-bold',
  variants: {
    colores: {
      primary: '',
      secondary: '',
      success: 'bg-green-500 hover:bg-green-700'
    }
  }
});

export default function Button({text,color}:Props) {
    return (
        <div className={buttonStyle({colores:color})}>{text}</div>
    );
}
