import React from "react";
import Input from "@/components/molecules/input";
import Page from "@/components/layout/structure/Page";
import Select from "@/components/molecules/select";

const Home: React.FC = () => {
  return (
    <Page>
      <div>
        <h2 className="text-2xl font-bold md:text-6xl">
          Tente novos <br />
          exercícios na academia!
        </h2>
        <p className="text-lg md:text-xl">
          Cansado dos mesmos exercícios? Faça uma lista personalizada com as
          suas necessidades e tente algo novo!
        </p>
      </div>
      <div>
        <form>
          <Input label="Idade" placeholder="Ex: 24" type="number" />
          <Input label="Seu peso (Kg)" placeholder="Ex: 77,5" />
          <Input label="Altura (cm)" placeholder="Ex: 177" />
          <Select
            label="Tipo do seu corpo"
            values={["Ectomorfo", "Mesomorfo", "Endomorfo"]}
            description="O biotipo determina diversos fatores, como metabolismo, estatura, quantidade de massa e gordura corporal. Determinar o seu biotipo é importante para calibrar quais exercícios devem ser feitos."
          />
          <Select
            label="Gênero"
            values={["Masculino", "Feminino", "Trans", "Não informar"]}
          />
        </form>
      </div>
    </Page>
  );
};
export default Home;
