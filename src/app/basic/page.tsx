'use client';

import { postBasicInfo } from '@/apis/API';
import Dropdown from '@/components/Dropdown';
import DropdownOption from '@/components/DropdownOption';
import ThemeButton from '@/components/ThemeButton';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [tall, setTall] = useState('0');
  const [weight, setWeight] = useState('0');
  const [gender, setGender] = useState('0');
  const [age, setAge] = useState('0');

  const submit = async () => {
    const basicInfo = {
      tall: tall,
      weight: weight,
      gender: gender,
      age: age,
    };

    const [response, error] = await postBasicInfo(basicInfo);
    if (error) {
      console.error(error);
      alert('basic error');
      return;
    }

    console.log(response);
    router.push('/cloth');
  };

  const handleClickTall: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTall(e.currentTarget.value);
  };
  const handleClickWeight: MouseEventHandler<HTMLButtonElement> = (e) => {
    setWeight(e.currentTarget.value);
  };
  const handleClickAge: MouseEventHandler<HTMLButtonElement> = (e) => {
    setAge(e.currentTarget.value);
  };
  const handleClickGender: MouseEventHandler<HTMLButtonElement> = (e) => {
    setGender(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col">
      BI 페이지
      <form>ㅎㅇ</form>
      <div>
        <Dropdown title={'키'}>
          <DropdownOption value={'160'} handleClick={handleClickTall}>
            a1
          </DropdownOption>
          <DropdownOption value={'170'} handleClick={handleClickTall}>
            a2
          </DropdownOption>
          <DropdownOption value={'180'} handleClick={handleClickTall}>
            a3
          </DropdownOption>
          <DropdownOption value={'190'} handleClick={handleClickTall}>
            a4
          </DropdownOption>
        </Dropdown>

        <Dropdown title={'몸무게'}>
          <DropdownOption value={'50'} handleClick={handleClickWeight}>
            a1
          </DropdownOption>
          <DropdownOption value={'60'} handleClick={handleClickWeight}>
            a2
          </DropdownOption>
          <DropdownOption value={'70'} handleClick={handleClickWeight}>
            a3
          </DropdownOption>
          <DropdownOption value={'80'} handleClick={handleClickWeight}>
            a4
          </DropdownOption>
        </Dropdown>
      </div>
      <div>
        <Dropdown title={'나이'}>
          <DropdownOption value={'0'} handleClick={handleClickAge}>
            a1
          </DropdownOption>
          <DropdownOption value={'10'} handleClick={handleClickAge}>
            a2
          </DropdownOption>
          <DropdownOption value={'20'} handleClick={handleClickAge}>
            a3
          </DropdownOption>
          <DropdownOption value={'30'} handleClick={handleClickAge}>
            a4
          </DropdownOption>
        </Dropdown>

        <Dropdown title={'성별'}>
          <DropdownOption value={'남'} handleClick={handleClickGender}>
            a1
          </DropdownOption>
          <DropdownOption value={'여'} handleClick={handleClickGender}>
            a2
          </DropdownOption>
        </Dropdown>
      </div>
      <ThemeButton text={'이동하기'} handleClick={submit} />
    </div>
  );
}
