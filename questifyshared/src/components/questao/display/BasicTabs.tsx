import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useCommentService } from '@/resources/comment/comment.service';
import { CommentRequest } from '@/resources/comment/commentRequest.resource';
import CommentComponent from './CommentComponent';
import RateComponent from './RateComponent';
import InputComment from './InputComment';
import { CommentResponse } from '@/resources/comment/commentResponse.resource';
import { useAuth } from '@/resources'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  questionId: number;
}

export default function BasicTabs({ questionId }: BasicTabsProps) {
  const [value, setValue] = React.useState(1);
  const [comments , setComments] = React.useState<CommentRequest[]>([])
  const useServiceComment = useCommentService();
  const useAutenticator = useAuth();
  const userSession = useAutenticator.getUserSession();
  const userId = userSession?.id;
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  async function searchComments() {
    const result = await useServiceComment.getAllComents(questionId);
    setComments(result);
  }

  
  function mapperComment(comment : CommentRequest){
    return(
        // key={comment.id}
        <div className='space-y-1' key={comment.text}>
          <CommentComponent text={comment.text} name={comment.nameUser}/>
        </div> 
    );
  }
  
  function mapperComments(){
    return(
      comments.map(mapperComment)
    )
  }

  const saveComment = async (comment : CommentResponse) => {
      
      try {
        const location = await useServiceComment.saveComment(comment);
        //console.log("Pergunta salva com sucesso! Location:", location);
        alert("Pergunta salva com sucesso!");
      }catch (error) {
        console.error("Erro ao salvar o comentario:", error);
        alert("Erro ao salvar o comentario.");
      }
  }

  function teste(){
    console.log("ESTOU APENAS TESTANDO")
  }


  React.useEffect(() => {
    if (value === 1) { // Supondo que o índice da aba de comentários seja 1
      searchComments();
    }
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        
          <Tab label="Sugerir Alteração" {...a11yProps(0)}
            sx={{ 
              fontSize: '16px', 
              //fontWeight: 'bold', 
              fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Helvetica, sans-serif",
              textTransform: 'none'
            }} />
          <Tab label="Comentários" {...a11yProps(1)}
            sx={{ 
              fontSize: '16px', 
              //fontWeight: 'bold', 
              fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Helvetica, sans-serif",
              textTransform: 'none'
            }} />
          <Tab label="Avaliar Questão" {...a11yProps(2)}
            sx={{ 
              fontSize: '16px', 
              //fontWeight: 'bold', 
              fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Helvetica, sans-serif",
              textTransform: 'none'
            }} /> 
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua mensagem</label>
        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>

        <div className='mr-8 mb-8'>
          <InputComment onClick={saveComment} questionId={questionId} userId={1}/>
        </div>

        <section className='grid grid-cols-1 space-y-10'>
          {
            mapperComments()
          }
        </section>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      
          <RateComponent />
          
      </CustomTabPanel>
    </Box>
  );
}



