"use client";

import React, { useCallback, useState } from "react";
import Input from "@/components/molecules/input";
import Page from "@/components/layout/structure/Page";
import Select from "@/components/molecules/select";
import Radio from "@/components/molecules/radio";
import Button from "@/components/atoms/button";

interface UserInfoForm {
  age: string;
  weight: string;
  height: string;
  bodyType: string;
  gender: string;
  goal: string;
  intensity: string;
}

const Home: React.FC = () => {
  const [formInfo, setFormInfo] = useState({
    age: "",
    weight: "",
    height: "",
    bodyType: "",
    gender: "",
    goal: "",
    intensity: "",
  } as UserInfoForm);

  const handleFormChange = useCallback((value: Partial<UserInfoForm>) => {
    setFormInfo((old) => ({ ...old, ...value }));
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
    <Page>
      <div className="flex flex-1 flex-col justify-between">
        <h2 className="mb-4 text-4xl font-bold md:text-6xl lg:mb-14">
          Tente novos exercícios!
        </h2>
        <p className="mb-2 text-lg md:text-xl">
          Saia da rotina e faça uma lista personalizada com as suas
          características.
        </p>
        <p className="mb-2 text-lg md:text-xl">
          Insira suas informações e deixe que uma inteligência artificial gere
          uma lista de atividades para você.
        </p>
        <p className="mb-2 text-lg md:text-xl">
          Quem sabe você não encontre um novo exercício que te motive?
        </p>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <Input
            label="Idade"
            placeholder="Ex: 24"
            type="age"
            value={formInfo.age}
            onChange={(e) => handleFormChange({ age: e.currentTarget.value })}
          />
          <Input
            label="Seu peso (Kg)"
            placeholder="Ex: 77,5"
            type="weight"
            value={formInfo.weight}
            onChange={(e) =>
              handleFormChange({ weight: e.currentTarget.value })
            }
          />
          <Input
            label="Altura (cm)"
            placeholder="Ex: 177"
            type="height"
            value={formInfo.height}
            onChange={(e) =>
              handleFormChange({ height: e.currentTarget.value })
            }
          />
          <Select
            label="Tipo do seu corpo"
            values={["Ectomorfo", "Mesomorfo", "Endomorfo"]}
            description="O biotipo determina diversos fatores do seu corpo, como metabolismo, estatura, quantidade de massa e gordura corporal. Determinar o seu biotipo é importante para calibrar quais exercícios darão os melhores resultados."
            onChange={(e) =>
              handleFormChange({ bodyType: e.currentTarget.value })
            }
          />
          <Select
            label="Gênero"
            values={["Masculino", "Feminino", "Trans", "Não informar"]}
            onChange={(e) =>
              handleFormChange({ gender: e.currentTarget.value })
            }
          />
          <Select
            label="Objetivo"
            values={[
              "Perder peso",
              "Ganhar massa muscular",
              "Ganhar resistência cardiovascular",
            ]}
            onChange={(e) => handleFormChange({ goal: e.currentTarget.value })}
          />
          <Radio
            label="Intensidade"
            values={["Leve", "Moderada", "Intensa"]}
            onChange={(value) => handleFormChange({ intensity: value })}
          />
          <Select
            label="Frêquencia de atividade física"
            values={[
              "Nunca fiz",
              "Pratico moderadamente",
              "Com frequência",
              "Sou atleta",
            ]}
            onChange={(e) =>
              handleFormChange({ intensity: e.currentTarget.value })
            }
          />
          <Button type="submit">Gerar</Button>
        </form>
      </div>
    </Page>
  );
};
export default Home;
