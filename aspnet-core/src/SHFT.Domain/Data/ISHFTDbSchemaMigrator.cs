using System.Threading.Tasks;

namespace SHFT.Data;

public interface ISHFTDbSchemaMigrator
{
    Task MigrateAsync();
}
