import React from 'react'
import FilterBar from '../components/searchAndFilter/filter/FilterBar'
import TemplateContent from '../components/templatesShow/TemplateContent'
import TemplateProduct from '../components/templatesShow/TemplateProduct'

function Template() {
    return (
        <div>
            {/* Filter bar */}
            { window.innerWidth >= 740 && <FilterBar /> }

            <div className="body-container py-10">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-primary font-bold  text-2xl lg:text-4xl">Language Arts Subject for Elementary - 2nd Grade: Writing</h1>
                    <span className="text-gray-500 lg:text-lg font-semibold">Giáo dục</span>
                </div>

                <TemplateProduct />

                <TemplateContent />
            </div>
        </div>
    )
}

export default Template