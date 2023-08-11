import { SC } from './styled'
import { useState, useRef, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { TiCancel } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { instanceHeader, BASE_URL, logintoken } from '../API/axiosAPI';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../../recoil/atoms';
import { idState } from '../../recoil/atoms'

export default function WritePage() {
  const [nickname] = useRecoilState<string>(nicknameState);
  const [id, setId] = useRecoilState<string>(idState)
  const navigate = useNavigate()
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [pay, setPay] = useState<string>('')
  const [content, setcontent] = useState<string>('')
  const [hashTagInput, setHashTagInput] = useState<string>('');
  const [hashTag, setHashTag] = useState<string[]>([]);
  const [deadLine, setDeadLine] = useState<string>('')
  const [images, setImages] = useState<any>([])


  const handleButtonClick = () => {
    hiddenInputRef.current?.click();
  };

  const handleImageChange = (e: any) => {
    const files: FileList | null = e.target.files
    setImages([...images, ...e.target.files])
    console.log(images);
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreviews((prevImages) => [...prevImages, ...newImages]);
    }
  };
  

  const handleHashTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTagInput(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const value = e.currentTarget.value.trim();
    setHashTagInput('')
    if (value !== '') {
      if(hashTag.length < 5){
        setHashTag((prevHashTag) => [...prevHashTag, value]);
        e.currentTarget.value = ''; 
      }else{
        alert('해시태그는 5개까지 입력할 수 있습니다.');
      }
    }

    e.preventDefault();
  }
  }
  
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleDeleteHashTag = (index:number) => {
    if (typeof index === 'number') {
      setHashTag((hashTags) => hashTags.filter((_, i) => i !== index));
    }
  }


  const handlePay = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPay(e.target.value)
  }

  const handlecontent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setcontent(e.target.value)
  }


  const handleDeadLine = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDeadLine(e.target.value)
    
    
    
   
  }


  const DraggableImage: React.FC<{ src: string; index: number }> = ({ src, index }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const handleDeleteImage = (index: number) => {
      if (typeof index === 'number') {
        setPreviews((prevImages: any[]) => prevImages.filter((_, i) => i !== index));
      }
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      // 드롭한 이미지의 인덱스 가져오기
      const dragIndex = Number(e.dataTransfer.getData('text/plain'));
      // 드랍 대상 이미지의 인덱스 가져오기
      const hoverIndex = index;
      // 이미지 순서 변경
      const newImages = [...previews];
      const dragImage = newImages[dragIndex];
      newImages.splice(dragIndex, 1);
      newImages.splice(hoverIndex, 0, dragImage);
      setPreviews(newImages);
    };

  

    return (
      <div
        style={{ position: 'relative', cursor: 'move' }}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <SC.Image src={src} alt={`Selected Image`} />
        <SC.DeleteButton onClick={() => handleDeleteImage(index)}>
          <BiMinus />
        </SC.DeleteButton>
      </div>
    );
  };


  const handleFormSubmit = async (e:any) => {
    e.preventDefault()
    e.persist()
   if(title.length > 64){
      alert('제목은 64자 미만으로 작성해주세요')
      return;
    }
    if(content.length > 500){
      alert('본문은 500자 미만으로 작성해주세요')
      return;
    }
    if(parseInt(pay) > 1000000){
      alert('가격은 100만원 이하로 책정해주세요')
      return;
    }

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    console.log(year, month, day)

    if (deadLine != null) {
      const matchedParts = deadLine.match(/\d{4}-(\d{2})-(\d{2})/);
      console.log(matchedParts);
      if (matchedParts !== null) {
          const selectedYear = parseInt(matchedParts[0]);
          const selectedMonth = parseInt(matchedParts[1]);
          const selectedDate = parseInt(matchedParts[2]);
          console.log(selectedYear, selectedMonth, selectedDate)
          if (year > selectedYear) {
              alert('기한은 예전 날짜로 설정할 수 없습니다.');
              return;
          }
          if (month > selectedMonth){
            alert('기한은 예전 날짜로 설정할 수 없습니다.');
            return;
          }
          if (day > selectedDate){
            alert('기한은 예전 날짜로 설정할 수 없습니다.');
            return;
          }
      }
    }

   


    let dataSet = {
      title: title,
      payDivision: 'HOURLY',
      pay: pay,
      content: content,
      deadLine: deadLine
    };

    let formData = new FormData();
    formData.append("errand", new Blob([JSON.stringify(dataSet)], { type: 'application/json' }))
    images.forEach((image:any) => {
      formData.append(`images`, image);
    });

    try{
      instanceHeader({
        url: 'errands',
        method: 'post',
        data: formData,
        headers: { 
          "Content-Type": "multipart/form-data",
        },
      }).then((res: any) => {
        setId(res.location.match(/\/(\d+)/)[0])
        navigate('/write/setlocation')
      })
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
        <SC.Container>
          <form style={{width: '100%', height: '100%'}} action='errands' method='post' encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
          <SC.ImgBox>
            {previews.length < 5 && (
              <SC.HiddenInput type="file" onChange={handleImageChange} ref={hiddenInputRef} multiple />
            )}
            <SC.CustomButton type="button" onClick={handleButtonClick}>
              {previews.length < 5 ? <BsPlusLg /> : <TiCancel />}
            </SC.CustomButton>
            <SC.ImagesBox>
              {previews &&
                previews.map((item, index) => (
                  <DraggableImage key={index} index={index} src={item} />
                ))}
            </SC.ImagesBox>
          </SC.ImgBox>
        <SC.Title>제목</SC.Title>
        <SC.TitleBox>
          <SC.TitleInput onChange={handleTitle}></SC.TitleInput>
        </SC.TitleBox>
        <SC.Title>가격</SC.Title>
        <SC.PayBox>
          <SC.PaySubBox>
            <SC.PayDivision>
              <option value="UNIT">건당</option>
              <option value="HOURLY">시급</option>
            </SC.PayDivision>
            <SC.PayInput type="number" step="500" min="1000" onChange={handlePay}></SC.PayInput>
          </SC.PaySubBox>
        </SC.PayBox>
        <SC.Title>기한</SC.Title>
        <SC.PayBox>
          <SC.PaySubBox>
            <SC.PayInput type="date" onChange={handleDeadLine}></SC.PayInput>
          </SC.PaySubBox>
        </SC.PayBox>
        <SC.Title>의뢰 내용</SC.Title>
        <SC.ContentBox>
          <SC.Content onChange={handlecontent}></SC.Content>
        </SC.ContentBox>
        <SC.Title>해시태그</SC.Title>
        <SC.HashTagSubBox>
          { hashTag.length > 0 ? 
            hashTag.map((item, index) => <SC.HashTag key={index}>{`#${item}`}<SC.HashTagCancel>
              <FaTimes onClick={() => handleDeleteHashTag(index)}></FaTimes>
              </SC.HashTagCancel></SC.HashTag>)
            :  <span style={{color: 'lightgray'}}>해시태그를 입력해주세요</span>
          }
        </SC.HashTagSubBox>
        <SC.HashtagBox>
        <SC.HashtagInput
          onChange={handleHashTagInput}
          onKeyUp={handleKeyUp} 
          value={hashTagInput}
          placeholder="해시 태그를 입력하세요 (공백과 줄바꿈으로 구분)"
        />
        </SC.HashtagBox>
        <SC.SubmitBox>
          <SC.SubmitButton  type="button" onClick={handleFormSubmit}>등록하기</SC.SubmitButton>
        </SC.SubmitBox>
          </form>
    </SC.Container>
  );
}