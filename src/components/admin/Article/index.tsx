import React from 'react';
import dynamic from 'next/dynamic';
import {observer} from 'mobx-react';
import ReactMarkdown from 'react-markdown';
// import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false,
});


const Article: React.FC = observer(() => {
    // Finish!
    // @ts-ignore
    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }
    return (
        <div>
            {/*@ts-ignore*/}
            <MdEditor style={{ height: '500px' }} renderHTML={(text) => <ReactMarkdown source={text} />} />
        </div>
    );
});

export default Article;
