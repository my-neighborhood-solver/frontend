import { Link } from "react-router-dom"
import { BiArrowBack, BiConfused } from 'react-icons/bi'
import { SC } from './styled'
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
            return (
              <Link to={`/errand/${product.errandId}`} key={`${index}_${product.errandId}`} style={{ textDecoration: "none", color: "#000"}}>
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
            <p>----</p>
            <BiConfused size={32}/>
            <SC.Notification>관심글이 없습니다</SC.Notification>
            <p>----</p>
          </SC.NoticeBox>
        }
      </SC.ListBox>
    </SC.Container>
  )
}