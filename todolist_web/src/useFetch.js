import {useState , useEffect} from 'react';

const useFetch = (url,method,body)=>{
  const abortCont = new AbortController();
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(true)
  const [error,setError] = useState(null)
  
    useEffect(()=>{
        fetch(url,{
          method:method,
          body:JSON.stringify(body)
        })
        .then(res =>{
          if(!res.ok){
            throw Error('could not fetch data for that resource')
          }
          return res.json()
        })
        .then(data =>{
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null)
        })
        .catch(err=>{
          if(err.name === 'AbortError'){ //如果是中止fetch请求 不会报错
            console.log('fetch aborted');
          } else{
            setError(err.message)
            setIsPending(false)
          }
        })
        // 此处相当于useEffect hooks函数运行结束 然后返回结果
        return () =>{ abortCont.abort() } //停止fetch请求 返回错误信息
      },[url,method])

      return{
        data,
        isPending,
        error
      }
}

export default useFetch