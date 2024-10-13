import React from 'react'
import {NavLink} from "react-router-dom";

const CSSNavbar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll scrollbar-hide" aria-label="Sidebar">
   <div className="h-full py-4 overflow-y-auto scrollbar-hide bg-gray-800">
    {/* <BrowserRouter> */}
      <ul className="space-y-2 pl-6 pt-20 font-medium">
        <li><h6 className="text-2xl font-bold py-3 text-white">CSS Tutorial</h6></li>
        <li><NavLink to='' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Intoduction </NavLink></li>
        <li><NavLink to='CSS_Syntax' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Syntax </NavLink></li>
        <li><NavLink to='CSS_Selectors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}> CSS Selectors </NavLink></li>
        <li><NavLink to='How_To_Add_CSS' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}> How To Add CSS</NavLink></li>
        <li><NavLink to='CSS_Comments' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}> CSS Comments</NavLink></li>
        <li><NavLink to='CSS_Colors' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}> CSS Colors</NavLink></li>
        <li><NavLink to='CSS_Backgrounds' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Backgrounds</NavLink></li>
        <li><NavLink to='CSS_Borders' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Borders</NavLink></li>
        <li><NavLink to='CSS_Margins' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Margins</NavLink></li>
        <li><NavLink to='CSS_Padding' className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Padding</NavLink></li>
        <li><NavLink to="css_background.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Backgrounds<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_dimension.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Height/Width</NavLink></li>
        <li><NavLink to="css_boxmodel.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Box Model</NavLink></li>
        <li><NavLink to="css_outline.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Outline<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_text.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Text<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_font.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Fonts<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_icons.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Icons</NavLink></li>
        <li><NavLink to="css_link.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Links</NavLink></li>
        <li><NavLink to="css_list.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Lists</NavLink></li>
        <li><NavLink to="css_table.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Tables<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_display_visibility.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Display</NavLink></li>
        <li><NavLink to="css_max-width.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Max-width</NavLink></li>
        <li><NavLink to="css_positioning.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Position</NavLink></li>
        <li><NavLink to="css_z-index.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Z-index</NavLink></li>
        <li><NavLink to="css_overflow.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Overflow</NavLink></li>
        <li><NavLink to="css_float.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Float<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_inline-block.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Inline-block</NavLink></li>
        <li><NavLink to="css_align.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Align</NavLink></li>
        <li><NavLink to="css_combinators.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Combinators</NavLink></li>
        <li><NavLink to="css_pseudo_classes.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Pseudo-class</NavLink></li>
        <li><NavLink to="css_pseudo_elements.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Pseudo-element</NavLink></li>
        <li><NavLink to="css_image_transparency.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Opacity</NavLink></li>
        <li><NavLink to="css_navbar.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Navigation Bar<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css_dropdowns.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Dropdowns</NavLink></li>
        <li><NavLink to="css_image_gallery.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Image Gallery</NavLink></li>
        <li><NavLink to="css_image_sprites.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Image Sprites</NavLink></li>
        <li><NavLink to="css_attribute_selectors.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Attr Selectors</NavLink></li>
        <li><NavLink to="css_form.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Forms</NavLink></li>
        <li><NavLink to="css_counters.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Counters</NavLink></li>
        <li><NavLink to="css_website_layout.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Website Layout</NavLink></li>
        <li><NavLink to="css_units.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Units</NavLink></li>
        <li><NavLink to="css_specificity.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Specificity</NavLink></li>
        <li><NavLink to="css_important.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS !important</NavLink></li>
        <li><NavLink to="css_math_functions.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Math Functions</NavLink></li>
        <li><br /></li>

        <li><h6 className="text-2xl font-bold py-3 text-white">CSS Advanced</h6></li>
        <li><NavLink to="css3_borders.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Rounded Corners</NavLink></li>
        <li><NavLink to="css3_border_images.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Border Images</NavLink></li>
        <li><NavLink to="css3_backgrounds.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Backgrounds</NavLink></li>
        <li><NavLink to="css3_colors.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Colors</NavLink></li>
        <li><NavLink to="css_colors_keywords.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Color Keywords</NavLink></li>
        <li><NavLink to="css3_gradients.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Gradients<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css3_shadows.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Shadows<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css3_text_effects.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Text Effects</NavLink></li>
        <li><NavLink to="css3_fonts.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Web Fonts</NavLink></li>
        <li><NavLink to="css3_2dtransforms.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS 2D Transforms</NavLink></li>
        <li><NavLink to="css3_3dtransforms.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS 3D Transforms</NavLink></li>
        <li><NavLink to="css3_transitions.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Transitions</NavLink></li>
        <li><NavLink to="css3_animations.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Animations</NavLink></li>
        <li><NavLink to="css_tooltip.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Tooltips</NavLink></li>
        <li><NavLink to="css3_images.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Style Images</NavLink></li>
        <li><NavLink to="css3_image_reflection.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Image Reflection</NavLink></li>
        <li><NavLink to="css3_object-fit.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS object-fit</NavLink></li>
        <li><NavLink to="css3_object-position.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS object-position</NavLink></li>
        <li><NavLink to="css3_masking.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Masking</NavLink></li>
        <li><NavLink to="css3_buttons.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Buttons</NavLink></li>
        <li><NavLink to="css3_pagination.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Pagination</NavLink></li>
        <li><NavLink to="css3_multiple_columns.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Multiple Columns</NavLink></li>
        <li><NavLink to="css3_user_interface.asp">CSS User Interface</NavLink></li>
        <li><NavLink to="css3_variables.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Variables<span class="w3s-accordion"></span></NavLink></li>
        <li><NavLink to="css3_box-sizing.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Box Sizing</NavLink></li>
        <li><NavLink to="css3_mediaqueries.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Media Queries</NavLink></li>
        <li><NavLink to="css3_mediaqueries_ex.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS MQ Examples</NavLink></li>
        <li><NavLink to="css3_flexbox.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS Flexbox<span class="w3s-accordion"></span></NavLink></li>
        <li></li>
        <li><br/></li>
        <li><h6 className="text-2xl font-bold py-3 text-white">CSS Responsive</h6></li>
        <li><NavLink to="css_rwd_intro.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Intro</NavLink></li>
        <li><NavLink to="css_rwd_viewport.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Viewport</NavLink></li>
        <li><NavLink to="css_rwd_grid.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Grid View</NavLink></li>
        <li><NavLink to="css_rwd_mediaqueries.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Media Queries</NavLink></li>
        <li><NavLink to="css_rwd_images.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Images</NavLink></li>
        <li><NavLink to="css_rwd_videos.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Videos</NavLink></li>
        <li><NavLink to="css_rwd_frameworks.asp"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Frameworks</NavLink></li>
        <li><NavLink to="css_rwd_templates.asp" className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>RWD Templates</NavLink></li>
        <li><br/></li>
        <li><h6 className="text-2xl font-bold py-3 text-white">CSS MCQ</h6></li>
        <li><NavLink  to="/CSS_Tutorials/CSS_Qize"className={` block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}>CSS MCQ Test</NavLink></li>
        <li><br/></li>

      </ul>
      {/* </BrowserRouter> */}
   </div>
</aside>
    </div>
  )
}

export default CSSNavbar
