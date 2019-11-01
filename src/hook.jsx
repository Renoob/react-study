import React, { useState, useEffect } from "react";

function Hook() {
    const [count, setCount] = useState(0);

    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        document.title = `你点击了${ count }次`

        // 相当于 componentWillUnmount
        return () => {
            document.title = "Hook学习"
        }
    }, [count]) // 仅在 count 更改时更新 ( 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），传递一个空数组（[]） )

    return (
        <div>
            <p>你点击了  { count }  次</p>
            <button onClick = { () => { setCount(count + 1) } }>点我</button>
        </div>
    );
}

export default Hook;