import React, { useEffect, useState } from 'react'
import TemplateFrames from '../components/templatesShow/TemplateFrames';
import FilterBar from '../components/searchAndFilter/filter/FilterBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import callApi from '../utils/apiCaller'
import { Link } from 'react-router-dom';
import NotFound from '../components/notFound/NotFound';

function SearchResult({ match }) {
    const [templateList, setTemplateList] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [totalResults, setTotalResults] = useState(0) 

    let templatesListTemp

    useEffect(() => {
        callApi('GET', `/api/templates/standard-pagination/?search=${match.params.value}&page=${match.params.page}`).then(res => {
            let templatesListTemp = res.data.results?.map((template, index) =>
                <div key={index}>
                    <TemplateFrames 
                        isPremium={template.isPremium} 
                        templateFile={template.templates_file} 
                        id={template.id} 
                        url={template.slide_image}
                    />
                    <Link to={`/templates/${template.id}`}>
                        <h4 className="hover:text-primary mt-2">{template.name}</h4>
                    </Link>
                    <p className="text-justify text-gray-400 font-light line-clamp-3">{template.description}</p>
                </div>
            )
            setTotalResults(res.data.count)
            setTemplateList(templatesListTemp);
            setNextPage(res.data.next);
            setPrevPage(res.data.previous);
        })
    }, [match, templatesListTemp])

    return <>
        <FilterBar />
        <div className="body-container font-bold">
            <h1 className="text-2xl text-gray-600">
                Kết quả tìm kiếm cho&nbsp;
                <span className="text-primary underline">{match.params.value}</span>
            </h1>
            <span className="text-gray-400">Có <b>{totalResults}</b> Temaplates tìm kiếm được với từ khóa <u><b>{match.params.value}</b></u></span>

            {(templateList===undefined || templateList?.length===0) ? 
                <NotFound message="Không tìm thấy kết quả"/>
                :
                <>
                    <div className="mt-8 min-w-full grid grid-cols-1 gap-y-5 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-5 sm:gap-y-7">
                        {templateList}
                    </div>
                    <div className="mt-6 space-x-4 flex justify-center">
                        { prevPage &&
                            <Link 
                                to={`/search/${match.params.value}/${parseInt(match.params.page)-1}`}
                                className="btn !bg-primary text-white !py-4"
                            >
                                <ArrowBackIcon />
                                Trang trước
                            </Link>
                        }
                        { nextPage &&
                            <Link 
                                to={`/search/${match.params.value}/${parseInt(match.params.page)+1}`}
                                className="btn !bg-primary text-white !py-4"
                            >
                                Trang tiếp
                                <ArrowForwardIcon />
                            </Link>
                        }
                    </div>
                </>
            }
        </div>
    </>
}

export default SearchResult
