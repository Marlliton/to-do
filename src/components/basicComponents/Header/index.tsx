import { MyImage } from "../Image";
import logo from "public/images/small_logo_mobile.svg";
import arrowLeft from "public/images/back.svg";
import { Button } from "../Button";
import { useAuth } from "../../../hooks/useAuth";

export function Header() {
  const { logout } = useAuth();

  return (
    <header
      className={`
          h-[80px] border-b border-b-black-task-area   flex justify-between items-center px-6
        `}
    >
      <Button
        clickDownEffect
        onClick={logout}
        className={`
        flex items-center gap-2
      `}
      >
        <MyImage
          src={arrowLeft}
          alt="Logo da aplicação"
          classNames="w-[24px]"
        />
        <p>Sair</p>
      </Button>
      <MyImage
        src={logo}
        alt="Logo da aplicação"
        classNames={`
            w-[35px] h-[35px]
          `}
      />
    </header>
  );
}
