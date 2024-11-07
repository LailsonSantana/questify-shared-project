interface CommentComponentProps{
    
    text: string
    name: string
    idUser?: number
    
}

const getRandomColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

export const CommentComponent: React.FC<CommentComponentProps> = ({text,name,idUser} : CommentComponentProps) => {

    const firstLetter = name.charAt(0).toUpperCase();
    const randomColor = getRandomColor();
    console.log("ID DO USUARIO É", idUser)
    return(
        <div className="flex items-start gap-3.5">
            <div className={`w-8 h-8 rounded-full flex justify-center items-center text-white ${randomColor}`}>
                {firstLetter}
            </div>
        
            <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                <div className="flex items-center space-x-5 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <p className="text-sm font-normal py-2 text-gray-900 dark:text-white"> {text} </p>
            </div>
        </div>
    );
}

export default CommentComponent;