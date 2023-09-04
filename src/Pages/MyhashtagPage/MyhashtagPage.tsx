import { useState, useEffect } from "react"
import * as SC from './styled'
import { BiArrowBack } from "react-icons/bi"
import { instanceHeader } from "../API/axiosAPI"



export default function MyhashtagPage() {
  const [newhashtag, setNewhashtag] = useState<string>('')
  const [hashtags, setHashtags] = useState<string[]>([])


  // 해시태그 조회
  useEffect(() => {
    try {
      instanceHeader({
        url: 'users/hashtags',
        method: 'get',
      })
      .then((res: any) => {
        console.log(res)
        setHashtags(res.hashtag)
      })
    } catch (error: any) {
      console.log(error)
    }
  },[])
    


  // 해시태그 등록
  const postHashtag  = () => {
    if(hashtags.includes(newhashtag)){
      alert('해시태그는 중복될 수 없습니다.')
      setNewhashtag('')
      return
    }
    setNewhashtag('')
    setHashtags([...hashtags, newhashtag])
    try {
      instanceHeader({
        url: `users/hashtags?tag=${newhashtag}`,
        method: 'post',
      })
      .then((res) => {
        console.log(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  


    // 해시태그 삭제
    const deleteHashtag  = (item:string ,index: number) => {
      if (typeof index === 'number') {
        setHashtags((hashTags) => hashTags.filter((_, i) => i !== index));
      }
      try {
        instanceHeader({
          url: `users/hashtags?tag=${item}`,
          method: 'delete',
        })
        .then((res:any) => {
          console.log(res)
        })
      } catch (error: any) {
        console.log(error)
      }
    }

  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>나의 관심사 키워드</SC.Title>
      <SC.InputBox>
        <SC.HashtagInput placeholder="알림 받을 키워드를 등록해주세요"
          value={newhashtag}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              postHashtag();
            }
          }
        }
          onChange={(e) => {
            setNewhashtag(e.target.value)
          }}/>
        <SC.InputBtn 
          onClick={postHashtag}
        >등록</SC.InputBtn>
      </SC.InputBox>
      <SC.HashtagListBox>
        {hashtags.length > 0 ? 
            hashtags.map((item: any, index: number) => (
              <>
                <SC.ListTitle>나의 관심사 키워드 목록</SC.ListTitle>
                <SC.ListBox key={index}>
                  <SC.HashtageBox>
                    <SC.HashtagMent>{item}</SC.HashtagMent>
                    <SC.DeleteButton onClick={() => deleteHashtag(item, index)}>X</SC.DeleteButton>
                  </SC.HashtageBox>
                </SC.ListBox>
              </>
            )) : ''
          }
      </SC.HashtagListBox>
    </SC.Container>
  )
}

