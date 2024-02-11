using SHFT.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SHFT.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class SHFTController : AbpControllerBase
{
    protected SHFTController()
    {
        LocalizationResource = typeof(SHFTResource);
    }
}
