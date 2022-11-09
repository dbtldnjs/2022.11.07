async function str(){
    // 실행
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/1')
        const result = await response.text()
        console.log(result)
    }
    // error
    catch(error){
        console.log('error입니다')
    }
    // 마감
    finally{
        console.log('작업 끝')
    }
}
str()