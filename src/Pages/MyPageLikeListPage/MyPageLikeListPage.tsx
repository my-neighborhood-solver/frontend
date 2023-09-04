import { Link } from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'
import * as SC from './styled'
import { instanceHeader } from "../API/axiosAPI"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { likelist } from "../../recoil/atoms"

export default function MyPageLikeListPage() {
const [ListALL, setListALL] = useRecoilState<any>(likelist)

  const interestsList = () => {
    try {
      instanceHeader({
        url: 'users/interests',
        method: 'get',
      })
      .then((res) => {
        setListALL(res)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    interestsList()
  }, [])

  const ondelete = (productid: any) => {
    console.log(productid)
    try {
      instanceHeader({
        url: `users/interests/${productid}`,
        method: 'delete',
      })
      .then((res) => {
        setListALL(res)
        console.log('삭제되었습니다')
      })
    } catch (error: any) {
      console.log(error)
    }

    try {
      instanceHeader({
        url: `errands/${productid}/like`,
        method: 'post'
      }).then((res: any) => {
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SC.Container>
      <SC.BackBtn onClick={() => history.back()}>
        <BiArrowBack size={24} />
      </SC.BackBtn>
      <SC.Title>관심글 목록</SC.Title>
      <SC.ListBox>
        {
          ListALL.length !== 0 
          ?
          ListALL.map((product: any, index: number) => {
            console.log(typeof product.errandId)
            return (
              <Link to={`/errands/${product.errandId}`} key={`${index}_${product.errandId}`} style={{ textDecoration: "none", color: "#000"}}>
                <SC.LikeCard>
                  <SC.DoscBox>
                    <SC.DoscTitle>{product.errandTitle}</SC.DoscTitle>
                    <SC.DeleteBtn onClick={(e:any) => {
                        e.preventDefault()
                        ondelete(`${product.errandId}`)
                    }}>X</SC.DeleteBtn>
                  </SC.DoscBox>
                </SC.LikeCard>
              </Link>
           )
          })
          :
          <SC.NoticeBox>
            <SC.Notification>의뢰를 고민 중이신가요?</SC.Notification>
            <SC.Notification>좋아요를 눌러 해당 글을 보관해보세요!</SC.Notification>
          </SC.NoticeBox>
        }
      </SC.ListBox>
    </SC.Container>
  )
}