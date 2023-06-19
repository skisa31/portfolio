import { useEffect, useState } from "react";

const ReturnTop = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolWindow)
    return () => {
      window.removeEventListener("scroll", scrolWindow)
    }
  }, [])

  const scrolWindow = () => {
    if (window.scrollY >= 100) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }
  const normalStyle = "opacity-0 pointer-events-none fixed bottom-28 right-16 bg-white text-xl text-black hover:underline font-bold py-2 px-4 rounded";
  const activeStyle = "opacity-100 bg-opacity-0 fixed bottom-28 right-16 bg-white text-xl text-black hover:underline font-bold py-2 px-4 rounded";
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    < button onClick={returnTop}
      className={style}
    >Topに戻る</button>
  )
}

export default ReturnTop;